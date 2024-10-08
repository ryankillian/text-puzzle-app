import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { loadBookData, prepareVersesForDragAndDrop } from '$lib/verseUtils';

export const load: PageLoad = async ({ params }) => {
	const { slug, chapter } = params;

	// Load book data
	const bookData = await loadBookData(slug);

	if (!bookData) {
		throw error(404, 'Book not found');
	}

	// Get the selected chapter
	const chapterNumber = parseInt(chapter, 10);
	const chapterVerses = bookData.chapters[chapterNumber];

	if (!chapterVerses) {
		throw error(404, 'Chapter not found');
	}

	// Prepare verses for drag-and-drop
	const { slots, correctOrder } = prepareVersesForDragAndDrop(chapterVerses);

	return {
		slots,
		correctOrder,
		book: bookData.name,
		chapter: chapterNumber
	};
};
