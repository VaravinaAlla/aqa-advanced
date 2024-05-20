/*Створіть об'єкт book з такими властивостями:
title: рядок, представляє назву книги.
author: рядок, представляє автора книги.
year: число, представляє рік видання книги.
Деструктуризуйте назву та автора книги з об'єкта book.
Виведіть деструктуризовані змінні в консоль*/

const book = {
  title: "History",
  author: "Maria Romanova",
  year: 2024,
};

const { title, author } = book;
console.log(title, author);
