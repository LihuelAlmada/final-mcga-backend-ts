import jwt from 'jsonwebtoken'
import config from '../config'
import { Request, Response, NextFunction } from 'express'

export const TokenValidation =  (req: Request, res: Response, next: NextFunction )=>  {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json('Access Denied');
        jwt.verify(token,config.jwtSecret);
        next();
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
}
//comentario para push