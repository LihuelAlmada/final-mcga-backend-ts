"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNotes = exports.deleteNote = exports.getNote = exports.getNotes = exports.createNote = void 0;
const Note_1 = __importDefault(require("../model/Note"));
//manipulate dates
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = new Note_1.default(req.body);
    const saveNote = yield note.save();
    res.json(saveNote);
});
exports.createNote = createNote;
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield Note_1.default.find();
        return res.json(notes);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getNotes = getNotes;
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteFound = yield Note_1.default.findById(req.params.id);
    if (!noteFound)
        return res.status(204).json();
    return res.json(noteFound);
});
exports.getNote = getNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteFound = yield Note_1.default.findByIdAndDelete(req.params.id);
    if (!noteFound)
        return res.status(204).json();
    return res.json(noteFound);
});
exports.deleteNote = deleteNote;
const updateNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteUpdated = yield Note_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!noteUpdated)
        return res.status(204).json();
    res.json(noteUpdated);
});
exports.updateNotes = updateNotes;
/*export const init : RequestHandler = (req,res) => {
    return res.status(204).json('Welcome');
}*/ 
