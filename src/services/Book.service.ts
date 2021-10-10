import IBook from '../interfaces/Book.interface';

import Book from '../models/Book.model';

type Book = {
    title:string,
    author:string,
    genres:string,
    rating:number,
}

export default class BookService {
    async createNewBook({
        title,
        author,
        genres,
        rating,
    }:IBook) {
        return await new Book({
            title,
            author,
            genres,
            rating,
        });
    }

    async findAllBooks() {
        return await Book.find();
    }

    async insertManyBooks(books:Book[]) {
        return await Book.insertMany(books)
            .catch((err:unknown) => (err as Error).message);
    }

    async findUserByTitle(title:string) {
        return await Book.findOne({
            title,
        });
    }

    async findUserByAuthor(author:string) {
        return await Book.findOne({
            author,
        });
    }
}