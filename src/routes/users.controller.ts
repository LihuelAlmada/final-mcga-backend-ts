import {RequestHandler} from 'express';
import User from './User';

export const createUser: RequestHandler = async (req,res) => {
    const user = new User(req.body);
    const saveUser = await user.save();
    res.json(saveUser);
}
export const getUsers: RequestHandler = async (req,res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        res.json(error)
    }
}
export const getUser: RequestHandler = async (req,res) => {
    const userFound = await User.findById(req.params.id);
    if(!userFound) return res.status(204).json();
    return res.json(userFound);
}
export const deleteUser: RequestHandler = async (req,res) => {
    const userFound = await User.findByIdAndDelete(req.params.id);
    if(!userFound) return res.status(204).json();
    return res.json(userFound);
}
export const updateUsers: RequestHandler = async (req,res) => {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!userUpdated) return res.status(204).json();
    res.json(userUpdated);
}