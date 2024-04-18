import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
	PORT: get('PORT').required().asPortNumber(),

	GOOGLE_APPLICATION_CREDENTIALS: get('GOOGLE_APPLICATION_CREDENTIALS')
		.required()
		.asString(),
};
