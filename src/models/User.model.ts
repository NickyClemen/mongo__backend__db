import { Schema, Model, model } from 'mongoose';

import IUser from '../interfaces/User.interface';

const userSchema:Schema = new Schema<IUser>({
    username: String,
    password: String,
    email: String,
    name: String,
    lastname: String,
    age: Number,
    readed: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    reading: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    toRead: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    abandoned: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    isAdmin: Boolean
});

const UserProfile:Model<IUser> = model<IUser>('userprofile', userSchema);

export default UserProfile;