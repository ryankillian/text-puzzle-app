import type { BookData, Verse } from '$lib/types';
import { booksMap } from '$lib/booksUtil';

const bookFiles = import.meta.glob('$lib/books/*.json');

// Utility function to load a book by slug
export async function loadBookData(slug: string): Promise<BookData | null> {
	// Normalize the slug by removing spaces and converting to lowercase
	const normalizedSlug = slug.toLowerCase().replace(/\s+/g, '');
	const book = booksMap[normalizedSlug];
	if (!book) return null;

	const bookFile = bookFiles[`/src/lib/books/${book.filename}`];
	if (!bookFile) return null;

	return (await bookFile()) as BookData;
}

// Utility function to shuffle verses and prepare drag-and-drop slots
export function prepareVersesForDragAndDrop(verses: Verse[]) {
	// Shuffle the verses
	const shuffledVerses = [...verses].sort(() => Math.random() - 0.5);

	// Create slots and items for drag-and-drop
	const slots = shuffledVerses.map((line, index) => ({
		...line,
		slotId: `slot${index + 1}`,
		itemId: `item${line.verse}`
	}));

	// Correct order for validation
	const correctOrder = verses.map((line) => `item${line.verse}`);

	return { slots, correctOrder };
}
