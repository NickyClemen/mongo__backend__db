import { Document } from 'mongoose';

import Book from '../models/User.model';
export default interface IUser extends Document {
    username:string;
    password:string;
    email:string,
    name:string;
    lastname:string;
    age:number;
    readed:InstanceType<typeof Book>[];
    reading:InstanceType<typeof Book>[];
    abandoned:InstanceType<typeof Book>[];
    toRead:InstanceType<typeof Book>[];
    isAdmin:boolean;
}