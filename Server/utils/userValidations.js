import Joi from "joi";
import userSchemaModel from "../model/userAccounts";


export const userValidation = Joi.object({
    DisplayName: Joi.string().min(5).max(20).trim(true).required(),
    Username: Joi.string().alphanum().min(5).max(20).trim(true).required(),
    Email: Joi.string().email().min(5).max(255).trim().required(),
    Password: Joi.string().min(6).trim(true).required(),
});

export const loginValidation = Joi.object ({
    Username: Joi.string().alphanum().min(5).max(20).trim(true).required(),
    Password: Joi.string().min(5).trim(true).required()
});

export const isExistingUser = async ( Email, Username ) => {
    const user = await userSchemaModel.findOne({
        $or: [
            { Email: Email },
            { Username: Username }
        ]
    });

    if (!user) {
        return null; // Return null when no user is found
      }
    
      const errorMessages = [];
    
      if (user.Email === Email) {
        errorMessages.push(`${Email} is already registered.`);
      }
    
      if (user.Username === Username) {
        errorMessages.push(`${Username} is already registered.`);
      }
    
      return errorMessages;

};