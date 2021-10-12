import { Document, Types } from 'mongoose';
export default interface IBook extends Document {
    title:string;
    author:string;
    genres:string,
    rating:string;
    image:string;
}