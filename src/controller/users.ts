import {Request, Response} from 'express';
import User, {IUser} from '../model/User'

export const signUp = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    if (!req.body.email || !req.body.password|| !req.body.userName) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }
  
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ msg: "The User already Exists" });
    }
  
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
};
export const signIn = (req: Request,res: Response)=>{
    res.send('signIn')
}