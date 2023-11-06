// Import Packages
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// Import External JS
import userSchemaModel from "../model/userAccounts";
import userVerificationModel from "../model/userVerifications";
import { isExistingUser, userValidation } from "../utils/userValidations";
import { securePassword, compareEmailToken, comparePassword } from "../utils/bcrypt";
import { emailTransport, sendVerification } from "../utils/emailTransporter";
dotenv.config();

// New Register Account
export const registerController = async (req, res) => {
    try {
        const { DisplayName, Email, Occupation, Username, Password } = req.body;
    // Validating
    console.log('This is registration of', req.body)
        const { error } = userValidation.validate(req.body);
        const existingUser = await isExistingUser( Email, Username );

        if (existingUser || error ) {
            const errorMessage = error ? error.details[0].message : 'Error Message from Validation';
            const message = existingUser ? `A user with this ${existingUser} already exist` : errorMessage;
            return res.status(500).json({ message });
        };
    //End Validating

    // Hashing Password
        const hashedPassword = await securePassword(Password);
    // End Hasing Password

    // Start Creating User Account
    const data = await userSchemaModel.create({
        DisplayName,
        Email,
        Occupation,
        Username,
        Password: hashedPassword, 
    });
    delete data.Password;
    // End Creating User Account
    const responseData = {
        Email: data.Email,
        DisplayName: data.DisplayName,
        Username: data.Username
    }

    // Test Connection thru Email Transport
    emailTransport()
    // Start Sending Email Varification
    sendVerification({ _id: data._id, Email: data.Email });
    // End Email Verification
    console.log(responseData, 'has Successfully registered');
    
    res.status(201).json({ message: 'Register Successfully', responseData});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    };
};

// Verifying User
export const verifyController = async (req, res) => {
    try {
        const { userID, emailToken } = req.body;
        console.log('Verifying:', userID)
        // Check if the user is already Verified
        // const isVerifiedData = await userSchemaModel.findById({ userID });
        // const isVerified = isVerifiedData.isVerified;
        // if (isVerified === true) {
        //     return res.status(200).json({ message: 'The User Is already Verified' })
        // }

        const data = await userVerificationModel.findOne({ userID });
        if (data) {
            const expiresAt = data.expiresAt
            if (expiresAt < Date.now()) {
                // This will handle Expired Token
                await userVerificationModel.deleteOne({ userID })
                return res.status(401).json({ message: "Expired Email Token. Please Click Resend for New Email Token Verifications" })
            } 
            
            if (await compareEmailToken(emailToken, data.EmailToken)) {
                const userData = await userSchemaModel.findByIdAndUpdate(userID, {
                    isVerified: true
                })
                await userVerificationModel.deleteOne({ userID })
                return res.status(200).json({ message: "Successfully Validated" })
            }
            console.log('Done Verifying', userID)
        } else {
            res.status(400).json({ message: "Verification Failed. User Does not exist or User is Verified or Wrong Token." })
        }

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
};

export const loginController = async (req, res) => {
    try {
        const { Email, Username, Password } = req.body;
        const data = await userSchemaModel.findOne({ 
            $or: [
                {Username: Username},
                {Email: Email}
            ]
        });

        if (!data || !(await comparePassword(Password, data.Password) )) {
           return res.status(401).json({ message: "User Credentials Wrong" })
        };
// TOKEN
        const accessToken = jwt.sign(
            {
                "DisplayName": data.DisplayName,
                "Username": data.Username,
                "Email": data.Email,
                "isVerified": data.isVerified
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );

        const refreshToken = jwt.sign(
            {
                "DisplayName": data.DisplayName,
                "Username": data.Username,
                "Email": data.Email,
                "isVerified": data.isVerified
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        
        const updateUserRefreshToken = await userSchemaModel.findByIdAndUpdate(data._id, {
            refreshToken: refreshToken
        })

        if (!updateUserRefreshToken) {
            return res.status(401).json({ message: "Token Invalid" })
        }

        const responseData = {
            "Username": data.Username,
            "DisplayName": data.DisplayName,
            "isVerified": data.isVerified
        }
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        console.log(data.DisplayName, 'Has Login with Tokens');
        res.status(200).json({ message: "Successful Login", accessToken, responseData })
    } catch (error) {
        res.status(500).json({message: "Internal Server Error" })
    };
};