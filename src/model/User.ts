import {Schema, model, Document} from 'mongoose';
import bcrypt from "bcrypt";
//model without ID
export interface IUser extends Document {
    userName: string;
    email: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>
};
const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})
//pre save date
userSchema.pre<IUser>("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    //Salt is a string to cifrate the pass
    const salt = await bcrypt.genSalt(10);
    //Hash is the cifrate pass
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});
//compare
userSchema.methods.comparePassword = async function(password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
};
export default model<IUser>('User', userSchema);