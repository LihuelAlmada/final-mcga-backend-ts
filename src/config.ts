import dotenv from 'dotenv';
dotenv.config();

//Define environment variables
export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'notes-database',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || 3000
}