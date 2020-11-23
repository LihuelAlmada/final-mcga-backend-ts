import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
    try{
    const mongooseOptions: ConnectionOptions = {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        //user: config.MONGO_USER,
        //pass: config.MONGO_PASSWORD
    }
    const db = await mongoose.connect('mongodb+srv://German:1234@cluster-ts.aqydr.mongodb.net/mcga-ts?retryWrites=true&w=majority', mongooseOptions);
    console.log('Database is connected to:', db.connection.name)
    } catch (error){
        console.error(error)
    }

})()