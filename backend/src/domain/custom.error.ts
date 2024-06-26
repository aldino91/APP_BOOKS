export class CustomError extends Error {
	private constructor(
		public readonly statusCode: number,
		public readonly message: string
	) {
		super(message);
	}

	static badRequest(message: string): CustomError {
		return new CustomError(400, message);
	}

	static notFound(message: string): CustomError {
		return new CustomError(404, message);
	}
	static internalServer(message: string): CustomError {
		return new CustomError(500, message);
	}
}
