//TODO:==============================
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.

// function min(a,b){

//    return Math.min (a,b)
// }
// console.log(min(8, 20));

//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// console.log(styles);

// styles[1] = "classic";
// console.log(styles);

// styles.slice(1);
// console.log(styles.slice(1));

// styles.unshift("rap", "reggie");
// console.log(styles);

//TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x,n){

//     return Math.pow(x,n);
// }

// console.log(pow(8,2));

//У нас є об'єкт, в якому зберігатимуться зарплати
//Нашої команди
//Напишіть код для сумування всіх зарплат і
//Збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 170,
//   };

// let sum = 0;
// // const salaryNumber = Object.values(salaries);
// // console.log(salaryNumber);
// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }
// console.log(sum);

//Напишіть функцію, яка приймає два аргументи і
// повертає всі числа, які діляться на дільник.
// Перший аргумент – це масив чисел, а другий – дільник.

// function calculate(numbers, divider) {
//   const z = [];
//   for (const i of numbers) {
//     if (i % divider === 0) {
//       z.push(i);
//     }
//   }
//   return z;
// }

// console.log(calculate([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Паліндром

//Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково
//читається як у звичному напрямку, так і у зворотному.
//Наприклад, "Anna" - це
//паліндром, а "table" і "John" - ні.

// !!!
// function palindrome(string) {
//   string = string.toLowerCase();
//   let newString = string.split("").reverse().join("");
//   console.log(newString);
//   if (string === newString) {
//     return "This is palindrome";
//   } else {
//     return "This is not palindrome";
//   }
// }

// console.log(palindrome("Vahtang"));

// FizzBuzz
// Потрібно перебрати усі числа  від 1 до n. Треба вивести у консоль
// числа, де n - це ціле число, з такими умовами:

// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizzbuzz замість чисел, кратних як 3, і 5.

function fizzbuzz(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("fizzbuzz");
    } else if (index % 5 === 0) {
      console.log("buzz");
    } else if (index % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(index);
    }
  }
}

fizzbuzz(45);
