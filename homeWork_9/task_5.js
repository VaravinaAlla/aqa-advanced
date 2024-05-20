/*Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
Зробіть деструктуризацію в циклі*/

const users = [
  {
    name: "Josh",
    email: "josh@gmail.com",
    age: 28,
  },
  {
    name: "Mark",
    email: "mark@gmail.com",
    age: 31,
  },
  {
    name: "Pol",
    email: "pol@gmail.com",
    age: 23,
  },
];
for (const { name, email, age } of users) {
  console.log(`${name} is ${age} years old has email: ${email}`);
}
