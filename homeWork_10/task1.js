import Book from "./book.js";
import Ebook from "./eBook.js";

const book1 = new Book("Killers of the Flower moon", "David Grann", 2017);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);
const book3 = new Book("Clean Code", "Robert C. Martin", 2008);

const eBook1 = new Ebook("Jane Eyre", "Charlotte Bronte", 2017, "fb2");
const eBook2 = new Ebook("JavaScript: The Good Parts", "Douglas Crockford", 2008, "PDF");
const eBook3 = new Ebook("Eloquent JavaScript", "Marijn Haverbeke", 2011, "EPUB");

book1.printInfo();
book2.printInfo();
book3.printInfo();
eBook1.printInfo();
eBook2.printInfo();
eBook3.printInfo();

const books = [book1, book2, book3, eBook1, eBook2, eBook3];
const oldestBook = Book.getOldestBook(books);
if (oldestBook) {
  console.log("The oldest book is:");
  oldestBook.printInfo();
} else {
  console.error("Could not determine the oldest book.");
}
