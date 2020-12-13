import mongoose from 'mongoose'
import config from './config';

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected', db.connection.name))
    .catch(err => console.log(err));



