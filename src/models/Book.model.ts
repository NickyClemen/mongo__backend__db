import { Schema, Model, model } from 'mongoose';

import IBook from '../interfaces/Book.interface';

const bookSchema:Schema = new Schema<IBook>({
    title: String,
    author: String,
    genres: String,
    rating: Number,
    image: String,
});

const Book:Model<IBook> = model<IBook>('book', bookSchema);

export default Book;