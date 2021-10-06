import { Schema, model } from 'mongoose';

import IUser from '../interfaces/User.interface';

const userSchema:Schema = new Schema<IUser>({
    username: String,
    password: String,
    name: String,
    lastname: String,
    age: Number,
    isAdmin: Boolean
});

export default model<IUser>('User', userSchema);