// Import Packages
import jwt from "jsonwebtoken";

// Import External JS
import userSchemaModel from "../model/userAccounts";
import userVerificationModel from "../model/userVerifications";
import { isExistingUser, userValidation } from "../utils/userValidations";
import { securePassword, compareEmailToken, comparePassword } from "../utils/bcrypt";
import { emailTransport, sendVerification } from "../utils/emailTransporter";


// New Register Account
export const registerController = async (req, res) => {
    try {
        const { DisplayName, Email, Username, Password } = req.body;
    // Validating
        const { error } = userValidation.validate(req.body);
        const existingUser = await isExistingUser( Email, Username );

        if (existingUser || error ) {
            const errorMessage = error ? error.details[0].message : 'Error Message from Validation';
            const message = existingUser ? `${existingUser}` : errorMessage;
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
    res.status(500).json({message: 'Internal Server Error', error});
    };
};

// Verifying User
export const verifyController = async (req, res) => {
    try {
        const { userID, emailToken } = req.params;
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
        console.log(Email)
        const data = await userSchemaModel.findOne({ 
            $or: [
                {Username: Username},
                {Email: Email}
            ]
        });

        if (!data || !(await comparePassword(Password, data.Password) )) {
           return res.status(401).json({ message: "User Credentials Wrong" })
        };

        const responseData = {
            DisplayName: data.DisplayName,
            Username: data.Username,
            Email: data.Email,
            isVerified: data.isVerified
        }

        console.log(data.DisplayName, 'Has Login');
        res.status(200).json({ message: "Successful Login", responseData })
    } catch (error) {
        res.status(500).json({message: "Internal Server Error" })
    };
};