import bcrypt, { hash } from "bcryptjs";

export const securePassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const secureEmailToken = async (EmailToken) => {
    const salt = await bcrypt.genSalt(10);
    const hashedEmailToken = await bcrypt.hash(EmailToken, salt);
    return hashedEmailToken;
}


// Compare
export const compareEmailToken = async (emailToken, emailTokenHashed) => {
    const isValid = await bcrypt.compare(emailToken, emailTokenHashed);
    return isValid;
};

export const comparePassword = async ( logPassword, hashPassword ) => {
    const isValid = await bcrypt.compare(logPassword, hashPassword)
    return isValid;
}