import express, { Router } from 'express';
import cors from 'cors';

interface Options {
	port: number;
	routes: Router;
	public_path?: string;
}

export class Server {
	public readonly app = express();
	private serverListener?: any;
	private readonly port: number;
	private readonly publicPath: string;
	private readonly routes: Router;

	constructor(options: Options) {
		const { port, routes, public_path = 'public' } = options;
		this.port = port;
		this.publicPath = public_path;
		this.routes = routes;
	}

	public async start() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(express.urlencoded({ extended: true }));

		this.app.use(express.static(this.publicPath));

		this.app.use(this.routes);

		this.serverListener = this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}
}
