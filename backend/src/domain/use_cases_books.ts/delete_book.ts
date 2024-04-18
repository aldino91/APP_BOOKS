import { BooksEntity } from '../entity/books_entity';
import { BooksRepository } from '../repository/book_repository';

export interface DeleteBookUseCases {
	execute(id: string): Promise<[string | undefined, BooksEntity?]>;
}

export class DeleteBook implements DeleteBookUseCases {
	constructor(private readonly bookrespository: BooksRepository) {}

	execute(id: string): Promise<[string | undefined, BooksEntity?]> {
		return this.bookrespository.deleteBookById(id);
	}
}
