import Book from "./book.js";

class Ebook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(fileFormat) {
    const validFormats = ["PDF", "EPUB", "MOBI", "AZW"];
    if (validFormats.includes(fileFormat)) {
      this._fileFormat = fileFormat;
    } else {
      console.error(
        `File format must be one of the following: ${validFormats.join(", ")}.`
      );
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new Ebook(book.name, book.author, book.year, fileFormat);
  }
}

export default Ebook;
