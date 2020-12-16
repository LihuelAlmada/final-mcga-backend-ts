/*import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import config from '../config'
import User from '../model/User'

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
};

export default new Strategy(opts, async (payload, done) =>{
    try {
        const user = await User.findById(payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch(error){
        console.log(error)
    }
})*/
import jwt from 'jsonwebtoken'
import config from '../config'
import {Request, Response, NextFunction} from 'express'

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
/*
interface IAuthorization{
    token: string;
}
export const TokenAuth =  (req: Request, res: Response, next: NextFunction )=>  {
    const isValid =jwt.verify(req.header('Authorization'), config.jwtSecret) as IAuthorization
    if (isValid) {
        next();
    }else{res.send('error')}
}*/