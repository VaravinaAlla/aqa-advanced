/*Вам потрібно створити програму, яка об'єднає два масиви в один
Ось кроки, які вам потрібно виконати:
Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
Створіть новий масив, який містить всі елементи з обох вихідних масивів.
Виведіть отриманий об'єднаний масив на консоль.*/

const firstArray = [-2, 0, "cat", 23.56, "@gmail"];
const secondArray = [23.6, -89.69, 5, "apple"];
const joinedArray = firstArray.concat(secondArray);

console.log(joinedArray);
