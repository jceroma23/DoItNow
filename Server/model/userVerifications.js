import mongoose from "mongoose";

const userVerificationSchema = new mongoose.Schema({
    userID: {
        type: String,
    },
    EmailToken: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    expiresAt: {
        type: Date
    },
});

const userVerificationModel = mongoose.model('UserVerification', userVerificationSchema);
export default userVerificationModel;