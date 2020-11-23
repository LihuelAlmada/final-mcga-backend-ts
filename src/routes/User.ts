import {Schema, model} from 'mongoose';
//model without ID

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: String,
    firstName: String,
    lastName: String,
    email: String,

    birthday: {
        type: Date,
        default: new Date()
    },
    city: String,
    phoneNumber: Number,
})

export default model('User', userSchema);