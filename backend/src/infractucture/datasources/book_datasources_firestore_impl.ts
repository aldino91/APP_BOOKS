import db from '../../config/config-firestore';
import {
	BookDataCreate,
	BookDataReturn,
	BooksDataSources,
	BooksEntity,
	CustomError,
} from '../../domain';
import { FormatDateTime } from '../../config/date-time-config';

export class BooksDataSourcesFirestoreImpl implements BooksDataSources {
	async getById(id: string): Promise<[string | undefined, BookDataReturn?]> {
		try {
			const bookRef = await db.collection('books').doc(id);

			const book = await bookRef.get();

			const bookData = book.data();

			if (book.exists) {
				const data: BookDataReturn = {
					id: book.id,
					title: bookData!.title,
					descriptions: bookData!.descriptions,
					author: bookData!.author,
					completedAt: bookData!.completedAt,
				};
				return [undefined, data];
			} else {
				throw CustomError.notFound('No hemos encontrado el libro');
			}
		} catch (error) {
			throw CustomError.internalServer(`${error}`);
		}
	}
	async getAll(): Promise<BookDataReturn[]> {
		const dataArray: BookDataReturn[] = [];
		try {
			const bookDataRef = await db.collection('books');

			const data = bookDataRef.get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					dataArray.push({
						id: String(doc.id),
						...doc.data(),
					} as BookDataReturn);
				});

				return dataArray;
			});

			return data;
		} catch (error) {
			throw CustomError.internalServer(`${error}`);
		}
	}
	async createBook(book: BookDataCreate): Promise<BooksEntity> {
		try {
			const datetime = new Date();
			const completedAt = new FormatDateTime(datetime);

			const newBook = {
				...book,
				completedAt: completedAt.formatDate(),
			};

			const bookData = await db.collection('books').add(newBook);
			const snapshot = await bookData.get();
			return snapshot.data() as BookDataReturn;
		} catch (error) {
			throw CustomError.internalServer(`${error}`);
		}
	}
	async updateBook(
		id: string,
		book: BookDataCreate
	): Promise<[string | undefined, BookDataReturn?]> {
		try {
			const datetime = new Date();

			const completedAt = new FormatDateTime(datetime);

			const bookRef = await db.collection('books').doc(id);
			const bookUpdate = await bookRef.get();
			if (bookUpdate.exists) {
				const newData: any = {
					title: book!.title,
					descriptions: book!.descriptions,
					author: book!.author,
					completedAt: completedAt.formatDate(),
				};

				bookRef
					.update(newData)
					.then(() => {
						console.log('Documento actualizado exitosamente');
					})
					.catch((error) => {
						throw CustomError.notFound(`${error}`);
					});

				return [undefined, newData];
			} else {
				return ['No hemos podido actualizar tu Libro', undefined];
			}
		} catch (error) {
			throw CustomError.internalServer(`${error}`);
		}
	}
	async deleteBookById(
		id: string
	): Promise<[string | undefined, BookDataReturn?]> {
		try {
			const bookRef = await db.collection('books').doc(id);
			const book = await bookRef.get();
			const bookData = book.data();

			if (book.exists) {
				const data: BookDataReturn = {
					id: book.id,
					title: bookData!.title,
					descriptions: bookData!.descriptions,
					author: bookData!.author,
					completedAt: bookData!.completedAt,
				};
				bookRef
					.delete()
					.then(() => {
						console.log('Documento eliminado exitosamente');
					})
					.catch((error) => {
						throw CustomError.notFound(`${error}`);
					});
				return [undefined, data];
			} else {
				return ['No hemos podido encontrar tu Libro', undefined];
			}
		} catch (error) {
			throw CustomError.internalServer(`${error}`);
		}
	}
}
