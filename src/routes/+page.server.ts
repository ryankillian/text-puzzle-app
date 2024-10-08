// import type { PageServerLoad } from './$types';
// import type { BookData } from '$lib/types';

// import { booksMap } from '$lib/booksUtil';

// const bookFiles = import.meta.glob('$lib/books/*.json');

// export const load: PageServerLoad = async () => {
// 	const booksArray = Object.values(booksMap);

// 	const randomBook = booksArray[Math.floor(Math.random() * booksArray.length)];

// 	const bookFile = bookFiles[`/src/lib/books/${randomBook.filename}`];

// 	if (!bookFile) {
// 		throw new Error(`Book file not found for ${randomBook.filename}`);
// 	}

// 	// Load the content of the selected book's JSON file
// 	const bookData = (await bookFile()) as BookData;

// 	const randomChapter = Math.floor(Math.random() * randomBook.chapters) + 1;

// 	const chapterVerses = bookData.chapters[randomChapter];

// 	// Shuffle the verses
// 	const shuffledLines = [...chapterVerses].sort(() => Math.random() - 0.5);

// 	// Create slots and items for drag-and-drop
// 	const slots = shuffledLines.map((line, index) => ({
// 		...line,
// 		slotId: `slot${index + 1}`,
// 		itemId: `item${line.verse}`
// 	}));

// 	// Correct order for validation
// 	const correctOrder = chapterVerses.map((line) => `item${line.verse}`);

// 	return {
// 		slots,
// 		correctOrder,
// 		book: randomBook.name, // Book name from the booksMap
// 		chapter: randomChapter
// 	};
// };

import type { PageServerLoad } from './$types';
import { booksMap } from '$lib/booksUtil';
import { loadBookData, prepareVersesForDragAndDrop } from '$lib/verseUtils';

export const load: PageServerLoad = async () => {
	const booksArray = Object.values(booksMap);

	// Pick a random book and chapter
	const randomBook = booksArray[Math.floor(Math.random() * booksArray.length)];
	const bookData = await loadBookData(randomBook.name.toLowerCase());

	if (!bookData) {
		throw new Error(`Book data not found for ${randomBook.name}`);
	}

	const randomChapter = Math.floor(Math.random() * randomBook.chapters) + 1;
	const chapterVerses = bookData.chapters[randomChapter];

	const { slots, correctOrder } = prepareVersesForDragAndDrop(chapterVerses);

	return {
		slots,
		correctOrder,
		book: randomBook.name, // Book name from the booksMap
		chapter: randomChapter
	};
};
