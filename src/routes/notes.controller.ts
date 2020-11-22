import {RequestHandler} from 'express';
//manipulate dates
export const getNotes: RequestHandler = (req,res) => {
    res.json('getting notes');
}