"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const noteController = __importStar(require("../controller/notes"));
const auth_1 = require("../middleware/auth");
//define URL
router.post("/notes", auth_1.TokenValidation, noteController.createNote);
router.get("/notes", noteController.getNotes);
router.get("/notes/:id", auth_1.TokenValidation, noteController.getNote);
router.delete("/notes/:id", auth_1.TokenValidation, noteController.deleteNote);
router.put("/notes/:id", auth_1.TokenValidation, noteController.updateNotes);
//router.get('/', noteController.init);
exports.default = router;
