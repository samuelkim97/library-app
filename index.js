const Book = (title, author, pages, read) => {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.read = read),
		(this.info = () => {
			return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
		});
};

const theHobbit = new Book("Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());
