import { Document } from 'mongoose';

export default interface IUser extends Document {
    username:string;
    password:string;
    email:string,
    name:string;
    lastname:string;
    age:number;
    isAdmin:boolean;
}