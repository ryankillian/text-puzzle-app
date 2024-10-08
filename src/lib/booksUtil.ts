import type { Book } from '$lib/types';

export const booksMap: Record<string, Book> = {
	// Old Testament
	genesis: { name: 'Genesis', filename: 'Genesis.json', chapters: 50, testament: 'Old' },
	exodus: { name: 'Exodus', filename: 'Exodus.json', chapters: 40, testament: 'Old' },
	leviticus: { name: 'Leviticus', filename: 'Leviticus.json', chapters: 27, testament: 'Old' },
	numbers: { name: 'Numbers', filename: 'Numbers.json', chapters: 36, testament: 'Old' },
	deuteronomy: {
		name: 'Deuteronomy',
		filename: 'Deuteronomy.json',
		chapters: 34,
		testament: 'Old'
	},
	joshua: { name: 'Joshua', filename: 'Joshua.json', chapters: 24, testament: 'Old' },
	judges: { name: 'Judges', filename: 'Judges.json', chapters: 21, testament: 'Old' },
	ruth: { name: 'Ruth', filename: 'Ruth.json', chapters: 4, testament: 'Old' },
	'1samuel': { name: '1 Samuel', filename: '1Samuel.json', chapters: 31, testament: 'Old' },
	'2samuel': { name: '2 Samuel', filename: '2Samuel.json', chapters: 24, testament: 'Old' },
	'1kings': { name: '1 Kings', filename: '1Kings.json', chapters: 22, testament: 'Old' },
	'2kings': { name: '2 Kings', filename: '2Kings.json', chapters: 25, testament: 'Old' },
	'1chronicles': {
		name: '1 Chronicles',
		filename: '1Chronicles.json',
		chapters: 29,
		testament: 'Old'
	},
	'2chronicles': {
		name: '2 Chronicles',
		filename: '2Chronicles.json',
		chapters: 36,
		testament: 'Old'
	},
	ezra: { name: 'Ezra', filename: 'Ezra.json', chapters: 10, testament: 'Old' },
	nehemiah: { name: 'Nehemiah', filename: 'Nehemiah.json', chapters: 13, testament: 'Old' },
	esther: { name: 'Esther', filename: 'Esther.json', chapters: 10, testament: 'Old' },
	job: { name: 'Job', filename: 'Job.json', chapters: 42, testament: 'Old' },
	psalms: { name: 'Psalms', filename: 'Psalms.json', chapters: 150, testament: 'Old' },
	proverbs: { name: 'Proverbs', filename: 'Proverbs.json', chapters: 31, testament: 'Old' },
	ecclesiastes: {
		name: 'Ecclesiastes',
		filename: 'Ecclesiastes.json',
		chapters: 12,
		testament: 'Old'
	},
	songofsolomon: {
		name: 'Song of Solomon',
		filename: 'SongofSolomon.json',
		chapters: 8,
		testament: 'Old'
	},
	isaiah: { name: 'Isaiah', filename: 'Isaiah.json', chapters: 66, testament: 'Old' },
	jeremiah: { name: 'Jeremiah', filename: 'Jeremiah.json', chapters: 52, testament: 'Old' },
	lamentations: {
		name: 'Lamentations',
		filename: 'Lamentations.json',
		chapters: 5,
		testament: 'Old'
	},
	ezekiel: { name: 'Ezekiel', filename: 'Ezekiel.json', chapters: 48, testament: 'Old' },
	daniel: { name: 'Daniel', filename: 'Daniel.json', chapters: 12, testament: 'Old' },
	hosea: { name: 'Hosea', filename: 'Hosea.json', chapters: 14, testament: 'Old' },
	joel: { name: 'Joel', filename: 'Joel.json', chapters: 3, testament: 'Old' },
	amos: { name: 'Amos', filename: 'Amos.json', chapters: 9, testament: 'Old' },
	obadiah: { name: 'Obadiah', filename: 'Obadiah.json', chapters: 1, testament: 'Old' },
	jonah: { name: 'Jonah', filename: 'Jonah.json', chapters: 4, testament: 'Old' },
	micah: { name: 'Micah', filename: 'Micah.json', chapters: 7, testament: 'Old' },
	nahum: { name: 'Nahum', filename: 'Nahum.json', chapters: 3, testament: 'Old' },
	habakkuk: { name: 'Habakkuk', filename: 'Habakkuk.json', chapters: 3, testament: 'Old' },
	zephaniah: { name: 'Zephaniah', filename: 'Zephaniah.json', chapters: 3, testament: 'Old' },
	haggai: { name: 'Haggai', filename: 'Haggai.json', chapters: 2, testament: 'Old' },
	zechariah: { name: 'Zechariah', filename: 'Zechariah.json', chapters: 14, testament: 'Old' },
	malachi: { name: 'Malachi', filename: 'Malachi.json', chapters: 4, testament: 'Old' },

	// New Testament
	matthew: { name: 'Matthew', filename: 'Matthew.json', chapters: 28, testament: 'New' },
	mark: { name: 'Mark', filename: 'Mark.json', chapters: 16, testament: 'New' },
	luke: { name: 'Luke', filename: 'Luke.json', chapters: 24, testament: 'New' },
	john: { name: 'John', filename: 'John.json', chapters: 21, testament: 'New' },
	acts: { name: 'Acts', filename: 'Acts.json', chapters: 28, testament: 'New' },
	romans: { name: 'Romans', filename: 'Romans.json', chapters: 16, testament: 'New' },
	'1corinthians': {
		name: '1 Corinthians',
		filename: '1Corinthians.json',
		chapters: 16,
		testament: 'New'
	},
	'2corinthians': {
		name: '2 Corinthians',
		filename: '2Corinthians.json',
		chapters: 13,
		testament: 'New'
	},
	galatians: { name: 'Galatians', filename: 'Galatians.json', chapters: 6, testament: 'New' },
	ephesians: { name: 'Ephesians', filename: 'Ephesians.json', chapters: 6, testament: 'New' },
	philippians: { name: 'Philippians', filename: 'Philippians.json', chapters: 4, testament: 'New' },
	colossians: { name: 'Colossians', filename: 'Colossians.json', chapters: 4, testament: 'New' },
	'1thessalonians': {
		name: '1 Thessalonians',
		filename: '1Thessalonians.json',
		chapters: 5,
		testament: 'New'
	},
	'2thessalonians': {
		name: '2 Thessalonians',
		filename: '2Thessalonians.json',
		chapters: 3,
		testament: 'New'
	},
	'1timothy': { name: '1 Timothy', filename: '1Timothy.json', chapters: 6, testament: 'New' },
	'2timothy': { name: '2 Timothy', filename: '2Timothy.json', chapters: 4, testament: 'New' },
	titus: { name: 'Titus', filename: 'Titus.json', chapters: 3, testament: 'New' },
	philemon: { name: 'Philemon', filename: 'Philemon.json', chapters: 1, testament: 'New' },
	hebrews: { name: 'Hebrews', filename: 'Hebrews.json', chapters: 13, testament: 'New' },
	james: { name: 'James', filename: 'James.json', chapters: 5, testament: 'New' },
	'1peter': { name: '1 Peter', filename: '1Peter.json', chapters: 5, testament: 'New' },
	'2peter': { name: '2 Peter', filename: '2Peter.json', chapters: 3, testament: 'New' },
	'1john': { name: '1 John', filename: '1John.json', chapters: 5, testament: 'New' },
	'2john': { name: '2 John', filename: '2John.json', chapters: 1, testament: 'New' },
	'3john': { name: '3 John', filename: '3John.json', chapters: 1, testament: 'New' },
	jude: { name: 'Jude', filename: 'Jude.json', chapters: 1, testament: 'New' },
	revelation: { name: 'Revelation', filename: 'Revelation.json', chapters: 22, testament: 'New' }
};

// Helper function to get book by slug
export function getBookBySlug(slug: string) {
	return booksMap[slug.toLowerCase()] || null;
}
