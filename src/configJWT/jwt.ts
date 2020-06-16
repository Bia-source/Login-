import jwt from 'jsonwebtoken';

const secret = '12345';

export const sing = (payload: any) => jwt.sign(payload, secret);
export const verify = (token: any) => jwt.verify(token, secret);