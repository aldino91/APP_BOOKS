import { BookDataCreate } from '../datasources/books_datasources';
import { BooksEntity } from '../entity/books_entity';
import { BooksRepository } from '../repository/book_repository';

export interface CreateBookUseCases {
	execute(data: BookDataCreate): Promise<BooksEntity>;
}

export class CreateBook implements CreateBookUseCases {
	constructor(private readonly bookrespository: BooksRepository) {}

	execute(data: BookDataCreate): Promise<BooksEntity> {
		return this.bookrespository.createBook(data);
	}
}
