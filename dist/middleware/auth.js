"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const TokenValidation = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).json('Access Denied');
        jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
        next();
    }
    catch (e) {
        res.status(400).send('Invalid Token');
    }
};
exports.TokenValidation = TokenValidation;
