//Створіть програму, яка генерує таблицю множення для обраного числа за допомогою кожного з циклів for, while

const number = 5;
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}

const number2 = 7;
let count = 1;
while (count <= 10) {
  let result = number2 * count;
  console.log(`${number2} x ${count} = ${result}`);
  count++;
}
