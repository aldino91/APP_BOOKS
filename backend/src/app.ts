import { envs } from './config/envs';

import { Server } from './presentations/server';

import { AppRoutes } from './routes';

(async () => {
	main();
})();

async function main() {
	const server = new Server({
		port: envs.PORT,

		routes: AppRoutes.routes,
	});

	server.start();
}
