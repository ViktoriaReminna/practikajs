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

// function fizzbuzz(number) {
//   for (let index = 1; index <= number; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (index % 5 === 0) {
//       console.log("buzz");
//     } else if (index % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(index);
//     }
//   }
// }

// fizzbuzz(45);

// Пошук голосних

//Потрібно написати функцію, яка приймає рядок як аргумент і повертає //кількість голосних, які містяться в рядку.
//Голосними є "a", "e", "i", "o", "u".


// function fuString(string) {
//   const newArray = ["a", "e", "i", "o", "u"];
//   let quantity = 0;
  
//   for (const str of string.toLowerCase()) {
//     if (newArray.includes(str)) {
//       quantity += 1
//     }
//   }
//   return quantity;
// }

// // fuString("string")
// console.log(fuString("string"))


// /Напишіть ф-цію calcTotalPrice(stones, stonesName),
// //яка приймає масив об'єктів та
// //рядок під назвою каменю.
// //Функція  повертає загальну вартість каменів
// //з таким ім'ям, ціною та кількістю з об'єкта
//

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
     
//   // for (const stone of stones) {
//   //   // const {name, price, quantity } = stone
//   //   if (name === stonesName) {
//   //     return price * quantity;
//         //   }
        
//   // }

//    for (const {name, price, quantity } of stones) {
//     if (name === stonesName) {
//       return price * quantity;
      
//     }
//   }
// }
// console.log(calcTotalPrice(stones, "Сапфир") )


// Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта
// sum() повертає суму збережених значень
// mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.first = a
//     this.second = b
//     return{first: this.first, second: this.second}
//   },
//   sum() {
//     return this.first + this.second;
//   },
//   mult() { 
//     return this.first * this.second;
//   },
// }
// console.log(calculator)
// console.log(calculator.read(3, 5))
// console.log(calculator)
// console.log(calculator.sum())
//  console.log(calculator.mult())