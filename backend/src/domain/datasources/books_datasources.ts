import { BooksEntity } from '../entity/books_entity';

export interface BookDataReturn {
	id: string;
	title: string;
	descriptions: string;
	author: string;
	completedAt: Date | null;
}

export interface BookDataCreate {
	title: string;
	descriptions: string;
	author: string;
	completedAt?: Date | null;
}

export abstract class BooksDataSources {
	abstract getById(id: string): Promise<[string | undefined, BookDataReturn?]>;
	abstract getAll(): Promise<BookDataReturn[]>;
	abstract createBook(book: BookDataCreate): Promise<BooksEntity>;
	abstract updateBook(
		id: string,
		book: BookDataCreate
	): Promise<[string | undefined, BookDataReturn?]>;
	abstract deleteBookById(
		id: string
	): Promise<[string | undefined, BookDataReturn?]>;
}
