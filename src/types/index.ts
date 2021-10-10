import { Types } from "mongoose";

export type TBook = {
    _id:Types.ObjectId,
    title:string,
    author:string,
    genres:string,
    rating:number,
};

export type TUser = {
    _id:Types.ObjectId,
    username:string,
    password:string,
    email:string,
    name:string,
    lastname:string,
    age:number,
    isAdmin:boolean
};