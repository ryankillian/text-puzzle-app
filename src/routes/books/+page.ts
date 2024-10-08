import type { PageLoad } from './$types';
import { booksMap } from '$lib/booksUtil';

export const load: PageLoad = async () => {
	const old = Object.values(booksMap).filter((book) => book.testament === 'Old');
	const newBooks = Object.values(booksMap).filter((book) => book.testament === 'New');

	return {
		old,
		new: newBooks
	};
};
