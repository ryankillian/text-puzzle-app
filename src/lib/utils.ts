export function generateBookSlug(bookName: string) {
	return bookName.toLowerCase().replace(/\s+/g, '');
}
