import Book from '../models/Book.model';
import IBook from '../interfaces/Book.interface';
import { TBook } from '../types';
export default class BookService {
    async createNewBook({
        title,
        author,
        genres,
        rating,
        image,
    }:IBook) {
        return await new Book({
            title,
            author,
            genres,
            rating,
            image,
        });
    }

    async insertManyBooks(books:TBook[]) {
        return await Book.insertMany(books)
        .catch((err:unknown) => (err as Error).message);
    }

    async findAllBooks() {
        return await Book.find({})
            .catch((err:unknown) => (err as Error).message);
    }

    async findBookByObjectId(id:string) {
        return await Book.findById(id)
            .catch((err:unknown) => (err as Error).message);
    }

    async findUserByTitle(title:string) {
        return await Book.findOne({
            title,
        }).catch((err:unknown) => (err as Error).message);
    }

    async findUserByAuthor(author:string) {
        return await Book.findOne({
            author,
        }).catch((err:unknown) => (err as Error).message);
    }
}