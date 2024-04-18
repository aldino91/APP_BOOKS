import { Request, Response } from 'express';
import {
	BookDataCreate,
	BookDataReturn,
	CreateBook,
	DeleteBook,
	GetAllBooks,
	GetByIdBook,
	UpdateBook,
} from '../../domain';
import { BooksRepositoryImple } from '../../infractucture/repositories/book_repositories_impl';

export class BookController {
	constructor(private readonly bookRepository: BooksRepositoryImple) {}

	getById = (req: Request, res: Response) => {
		const id = req.params.id;

		new GetByIdBook(this.bookRepository)
			.execute(id)
			.then((book) => res.status(200).json(book))
			.catch((err) => res.status(500).send(err));
	};

	getAll = (req: Request, res: Response) => {
		new GetAllBooks(this.bookRepository)
			.execute()
			.then((books) => res.status(200).json(books))
			.catch((err) => res.status(500).send(err));
	};

	createBook = (req: Request, res: Response) => {
		const data: BookDataCreate = req.body;

		const { title, descriptions, author } = data;

		const dataComplete = {
			title,
			descriptions,
			author,
		};

		new CreateBook(this.bookRepository)
			.execute(dataComplete)
			.then((book) => res.status(200).json(book))
			.catch((err) => res.status(400).send(err));
	};

	deleteBook = (req: Request, res: Response) => {
		const id = req.params.id;

		new DeleteBook(this.bookRepository)
			.execute(id)
			.then((book) => res.status(200).json(book))
			.catch((err) => res.status(500).send(err));
	};

	updateBook = (req: Request, res: Response) => {
		const id = req.params.id;
		const body = req.body;

		new UpdateBook(this.bookRepository)
			.execute(id, body)
			.then((book) => res.status(200).json(book))
			.catch((err) => res.status(500).send(err));
	};
}
