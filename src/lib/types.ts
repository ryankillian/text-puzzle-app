// Verse type represents a single verse in a chapter
export interface Verse {
	verse: number;
	text: string;
}

// BookData type represents the structure of a single book's data
export interface BookData {
	name: string;
	chapters: {
		[key: number]: Verse[];
	};
}

export interface Book {
	name: string;
	filename: string;
	chapters: number;
	testament: 'Old' | 'New';
}
