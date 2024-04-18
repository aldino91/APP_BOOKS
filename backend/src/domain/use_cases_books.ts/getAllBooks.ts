import { BookDataReturn } from '../datasources/books_datasources';
import { BooksEntity } from '../entity/books_entity';
import { BooksRepository } from '../repository/book_repository';

export interface GetAllBookUseCases {
	execute(): Promise<BookDataReturn[]>;
}

export class GetAllBooks implements GetAllBookUseCases {
	constructor(private readonly bookrespository: BooksRepository) {}

	execute(): Promise<BookDataReturn[]> {
		return this.bookrespository.getAll();
	}
}
