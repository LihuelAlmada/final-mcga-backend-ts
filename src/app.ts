import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import noteRoutes from './routes/notes';
import privateRoutes from './routes/private';
import authRoutes from './routes/auth';

const app = express();

app.set('port', config.PORT);
    /*middlewares*/
app.use(morgan('dev'));
//allow all servers connect, make request
app.use(cors());
//for express can read json object
app.use(express.json());
//for express can read post request from a form
app.use(express.urlencoded({extended: false}));

app.use(noteRoutes);
app.use(authRoutes);
app.use(privateRoutes);

export default app;