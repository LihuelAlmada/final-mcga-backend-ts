"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
mongoose_1.default.connect(process.env.MONGODB_URI || `mongodb+srv://${config_1.default.MONGO_USER}:${config_1.default.MONGO_PASSWORD}${config_1.default.MONGO_HOST}/${config_1.default.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected', db.connection.name))
    .catch(err => console.log(err));
