import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import noteRoutes from './routes/notes.routes';
import userRoutes from './routes/users.routes'
const app = express();

app.set('port', config.PORT);
app.use(morgan('dev'));
//allow all servers connect, make request
app.use(cors());
//for express can read json object
app.use(express.json());
//for express can read post request from a form
app.use(express.urlencoded({extended: false}));
app.use(noteRoutes);
app.use(userRoutes);
export default app;