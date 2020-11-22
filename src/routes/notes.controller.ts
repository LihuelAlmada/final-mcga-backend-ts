import {RequestHandler} from 'express';
import Note from './Note';
//manipulate dates
export const createNote: RequestHandler = async (req,res) => {
    const note = new Note(req.body);
    const saveNote = await note.save();
    res.json(saveNote);
}
export const getNotes: RequestHandler = async (req,res) => {
    try {
        const notes = await Note.find();
        return res.json(notes);
    } catch (error) {
        res.json(error)
    }
}
export const getNote: RequestHandler = async (req,res) => {
    const noteFound = await Note.findById(req.params.id);
    if(!noteFound) return res.status(204).json();
    return res.json(noteFound);
}
export const deleteNote: RequestHandler = async (req,res) => {
    const noteFound = await Note.findByIdAndDelete(req.params.id);
    if(!noteFound) return res.status(204).json();
    return res.json(noteFound);
}
export const updateNotes: RequestHandler = async (req,res) => {
    const noteUpdated = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!noteUpdated) return res.status(204).json();
    res.json(noteUpdated);
}