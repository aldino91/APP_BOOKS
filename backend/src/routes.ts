import { Router } from 'express';
import { BooksRoutes } from './presentations/Books/routes';

export class AppRoutes {
	static get routes(): Router {
		const routes = Router();

		routes.use('/api/', BooksRoutes.routes);

		return routes;
	}
}
