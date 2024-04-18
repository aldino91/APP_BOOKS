import {
	BookDataCreate,
	BookDataReturn,
} from '../datasources/books_datasources';
import { BooksEntity } from '../entity/books_entity';

export abstract class BooksRepository {
	abstract getById(id: string): Promise<[string | undefined, BookDataReturn?]>;
	abstract getAll(): Promise<BookDataReturn[]>;
	abstract createBook(book: BookDataCreate): Promise<BooksEntity>;
	abstract updateBook(
		id: string,
		book: BookDataCreate
	): Promise<[string | undefined, BooksEntity?]>;
	abstract deleteBookById(
		id: string
	): Promise<[string | undefined, BooksEntity?]>;
}
