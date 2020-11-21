import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

(async () => {
    try{
    const mongooseOptions: ConnectionOptions = {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    const db = await mongoose.connect(`mongodb://localhost/notes-database`, mongooseOptions);
    console.log('Database is connected to:', db.connection.name)
    } catch (err){
        console.error(err)
    }

})()