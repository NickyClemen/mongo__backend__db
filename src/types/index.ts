import { Types } from "mongoose";

export type TBook = {
    title:string,
    author:string,
    genres:string,
    rating:number,
};

export type TUser = {
    username:string,
    password:string,
    email:string,
    name:string,
    lastname:string,
    age:number,
    isAdmin:boolean
};