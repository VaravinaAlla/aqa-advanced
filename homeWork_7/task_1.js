/*Створіть функцію handleNum яка буде приймати 3 параметри.
число
Колбек функцію яку треба викликати якщо передане число парне
Колбек функцію яку треба викликати якщо передане число непарне
Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd.
Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, 
a handleOdd буде виводити текст “number is odd”
Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше. */

const handleNum = (number, cb_odd, cb_even) => (number % 2 !== 0 ? cb_even() : cb_odd());

const handleEven = () => console.log("Number is even");

const handleOdd = () => console.log("Number is odd");

console.log(handleNum(24, handleEven, handleOdd));
