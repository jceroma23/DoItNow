import { boolean } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    GoogleId: {
        type: String,
        default: ""
    },
    DisplayName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Occupation: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
        
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
        
    }
}, { timestamps: true });

const userSchemaModel = mongoose.model('UserAccount', userSchema);
export default userSchemaModel;