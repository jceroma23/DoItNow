import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { secureEmailToken } from "./bcrypt";
import userVerificationModel from "../model/userVerifications";
import { date } from "joi";

dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

export const emailTransport = async () => {
    try {
        transporter.verify(( error, success ) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Ready for Message");
                console.log("Nodemailer Success", success);
            }
        });
    } catch (error) {
        console.log(error)
    };
};

export const sendVerification = async ({ _id, Email }) => {
    try {
        const currentUrl = process.env.CURRENT_URL;
        const EmailToken = uuidv4() + _id;
    
        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: Email,
            subject: "Email Verification",
            html:`<p>Please Verify your Email Address to complete your Registration.</p> <p>This Link Expires in 6 Hours.</p>
            <p>Please<a href=${currentUrl + "/api/auth/user/verify/" + _id + "/" + EmailToken}> Click the Link to Verify</a></p> <p>Thank you for Registering</p> `
        }
    
        const hashedEmailToken = await secureEmailToken(EmailToken);
    
        const data = await userVerificationModel.create({
            userID: _id,
            EmailToken: hashedEmailToken,
            createdAt: Date.now(),
            expiresAt: Date.now() + 21600000,
        });
        delete data.EmailToken;
        
        transporter.sendMail(mailOptions)
            .then(() => {
                console.log('User Verification Email Sent');
            })
            .catch((error) => {
                console.error('Error sending verification email:', error);
            });

    } catch (error) {
        console.log(error)
    };
};