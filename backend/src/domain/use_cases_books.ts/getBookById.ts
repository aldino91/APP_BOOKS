import { BookDataReturn } from '../datasources/books_datasources';
import { BooksEntity } from '../entity/books_entity';
import { BooksRepository } from '../repository/book_repository';

export interface GetByIdBookUseCases {
	execute(id: string): Promise<[string | undefined, BookDataReturn?]>;
}

export class GetByIdBook implements GetByIdBookUseCases {
	constructor(private readonly bookrespository: BooksRepository) {}

	execute(id: string): Promise<[string | undefined, BookDataReturn?]> {
		return this.bookrespository.getById(id);
	}
}
