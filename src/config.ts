import dotenv from 'dotenv';
dotenv.config();

//Define environment variables
export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'mcga-ts?retryWrites=true&w=majority',
    MONGO_USER: process.env.MONGO_USER || 'German',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '1234',
    MONGO_HOST: process.env.MONGO_HOST || '@cluster-ts.aqydr.mongodb.net',
    PORT: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'sl_myjwtSecret',
}

//mongodb+srv://German:1234@cluster-ts.aqydr.mongodb.net/mcga-ts?retryWrites=true&w=majority
