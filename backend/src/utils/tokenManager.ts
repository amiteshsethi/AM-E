import pkg from 'jsonwebtoken';
const { sign } = pkg;

export const createToken = (id:string, email:string, expiresIn:string) => {
    const payload = { id, email };
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
};
