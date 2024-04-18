export class BooksEntity {
	constructor(
		public readonly title: string,
		public readonly descriptions: string,
		public readonly author: string,
		public completedAt?: Date | null
	) {}
}
