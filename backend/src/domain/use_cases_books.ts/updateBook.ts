import { BookDataReturn } from '../datasources/books_datasources';
import { BooksEntity } from '../entity/books_entity';
import { BooksRepository } from '../repository/book_repository';

export interface UpdateBookUseCases {
	execute(
		id: string,
		data: BookDataReturn
	): Promise<[string | undefined, BooksEntity?]>;
}

export class UpdateBook implements UpdateBookUseCases {
	constructor(private readonly bookrespository: BooksRepository) {}

	execute(
		id: string,
		data: BookDataReturn
	): Promise<[string | undefined, BooksEntity?]> {
		return this.bookrespository.updateBook(id, data);
	}
}
