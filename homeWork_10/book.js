class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === "string" && name.trim() !== "") {
      this._name = name;
    } else {
      console.error("Title must be a non-empty string.");
    }
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof author === "string" && author.trim() !== "") {
      this._author = author;
    } else {
      console.error("Author must be a non-empty string.");
    }
  }

  get year() {
    return this._year;
  }

  set year(year) {
    const currentYear = new Date().getFullYear();
    if (typeof year === "number" && year > 0 && year <= currentYear) {
      this._year = year;
    } else {
      console.error(
        `Year must be a positive number not greater than ${currentYear}.`
      );
    }
  }

  static getOldestBook(books) {
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
  }

  printInfo() {
    console.log(`The book name: '${this.name}`);
    console.log(`The author: ${this.author}`);
    console.log(`Year: ${this.year}`);
  }
}

export default Book;
