import mongoose from 'mongoose';
const { Schema } = mongoose;

import IUser from '../interfaces/User.interface';

const userSchema = new Schema<IUser>({
    _id: Number,
    username:  String,
    password: String,
    name:   String,
    lastname: String,
    isLogin: Boolean
});

export default userSchema;