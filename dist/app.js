"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const notes_1 = __importDefault(require("./routes/notes"));
const private_1 = __importDefault(require("./routes/private"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = express_1.default();
app.set('port', config_1.default.PORT);
/*middlewares*/
app.use(morgan_1.default('dev'));
//allow all servers connect, make request
app.use(cors_1.default());
//for express can read json object
app.use(express_1.default.json());
//for express can read post request from a form
app.use(express_1.default.urlencoded({ extended: false }));
app.use(notes_1.default);
app.use(auth_1.default);
app.use(private_1.default);
exports.default = app;
