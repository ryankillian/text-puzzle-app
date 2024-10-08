import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { booksMap } from '$lib/booksUtil';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const book = booksMap[slug.toLowerCase()];

	if (!book) {
		throw error(404, 'Book not found');
	}

	// Return the book name and chapter count directly from booksMap
	return {
		book: book.name,
		chapters: Array.from({ length: book.chapters }, (_, i) => i + 1)
	};
};
