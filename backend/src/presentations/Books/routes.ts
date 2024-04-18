import { Request, Response, Router } from 'express';
import { BookController } from './controller';
import { BooksDataSourcesFirestoreImpl } from '../../infractucture/datasources/book_datasources_firestore_impl';
import { BooksRepositoryImple } from '../../infractucture/repositories/book_repositories_impl';

export class BooksRoutes {
	static get routes(): Router {
		const router = Router();

		const datasources = new BooksDataSourcesFirestoreImpl();

		const bookrespository = new BooksRepositoryImple(datasources);

		const bookcontroller = new BookController(bookrespository);

		router.get('/books', bookcontroller.getAll);
		router.get('/book/:id', bookcontroller.getById);
		router.post('/books', bookcontroller.createBook);
		router.delete('/book/:id', bookcontroller.deleteBook);
		router.put('/books/:id', bookcontroller.updateBook);

		return router;
	}
}
