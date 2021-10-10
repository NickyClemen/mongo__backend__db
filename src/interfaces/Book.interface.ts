import { Document, Types } from 'mongoose';

import UserProfile from '../models/User.model';
export default interface IBook extends Document {
    title:string;
    author:string;
    genres:string,
    rating:string;
}