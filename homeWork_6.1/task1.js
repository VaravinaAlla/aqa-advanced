//Створіть функцію яка приймає два параметри: width і height.
//Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
//Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
//Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//function declaration
function countSquare(width, height) {
  return width * height;
}

//function expression
const square = function (width, height) {
  return width * height;
};

//arrow function
const square2 = (width, height) => width * height;

console.log(countSquare(5, 10));
console.log(square(5, 10));
console.log(square2(5, 10));
