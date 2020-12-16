import { Request, Response } from 'express';
import User, {IUser} from '../model/User'
import jwt from "jsonwebtoken";
import config from '../config'

function createToken(user: IUser) {
  //create a token with this atributes
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {expiresIn: 86400});
}

export const signUp = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    if (!req.body.email || !req.body.password|| !req.body.userName) {
      return res.status(400).json({ msg: "Please. Send your email and password" });
    }
  
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ msg: "The User already Exists" });
    }
  
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
};

export const signIn = async(req: Request,res: Response): Promise<Response>=> {
  if (!req.body.email || !req.body.password|| !req.body.userName) {
    return res.status(400).json({ msg: "Please. Send your email and password" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: "The User does not exist" });
  }
  const isMatch = await user.comparePassword(req.body.password)
  if(isMatch) {
    return res.status(200).json({token:createToken(user),user: user})
  }
  return res.status(400).json({
    msg: 'The email, user name or password are incorrect'
  })
}