import {
	BookDataCreate,
	BookDataReturn,
	BooksDataSources,
	BooksEntity,
} from '../../domain';
import { BooksRepository } from '../../domain/repository/book_repository';

export class BooksRepositoryImple implements BooksRepository {
	constructor(private readonly datasources: BooksDataSources) {}

	getById(id: string): Promise<[string | undefined, BookDataReturn?]> {
		return this.datasources.getById(id);
	}
	getAll(): Promise<BookDataReturn[]> {
		return this.datasources.getAll();
	}
	createBook(book: BookDataCreate): Promise<BooksEntity> {
		return this.datasources.createBook(book);
	}
	updateBook(
		id: string,
		book: BookDataReturn
	): Promise<[string | undefined, BooksEntity?]> {
		return this.datasources.updateBook(id, book);
	}
	deleteBookById(id: string): Promise<[string | undefined, BooksEntity?]> {
		return this.datasources.deleteBookById(id);
	}
}
