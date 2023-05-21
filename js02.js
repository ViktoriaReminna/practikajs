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

// fizzbuzz(12);

// Пошук голосних

//Потрібно написати функцію, яка приймає рядок як аргумент і повертає
//кількість голосних, які містяться в рядку.
//Голосними є "a", "e", "i", "o", "u".

// function fuString(string) {
//   const newArray = ["a", "e", "i", "o", "u"];
//   let quantity = 0;

//   for (const str of string.toLowerCase()) {
//     if (newArray.includes(str)) {
//       quantity += 1;
//     }
//   }
//   return quantity;
// }

// fuString("string");
// console.log(fuString("string"));

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
//   for (const stone of stones) {
//     const { name, price, quantity } = stone;
//     if (stonesName === name) {
//       let totalSum = price * quantity;
//       return `Загальна вартість: ${name} - ${totalSum} за ${quantity} шт.`;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, "Щебень"));

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
//   red(a, b) {
//     this.first = a;
//     this.second = b;
//     return { first: this.first, second: this.second };
//   },

//   sum() {
//     return this.first + this.second;
//   },
//   mult() {
//     return this.first * this.second;
//   },
// };

// console.log(calculator);

// console.log(calculator.red(3, 5));
// console.log(calculator.sum());
// console.log(calculator.mult());

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

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//     { name: "Stones skin", price: 520 },
//   ],

//   addHuyna(number) {
//     let x = 0;

//     for (let potion of this.potions) {
//       //   console.log(this.potions.indexOf(potion));
//       x = this.potions.indexOf(potion) + 1;
//       if (number > this.potions.length) {
//         console.log("В обїекті немає властивості з таким індексом");
//       }
//       if (x === number) {
//         return potion.name;
//       }
//     }
// for (let i = 0; i < this.potions.length; i++) {
//   x = this.potions[i];
//   console.log(x);
//   if (i === 3) {
//     console.log(this.potions[i]);
//   }
// }
//   },

// potions
//     for (let potion of this.potions) {
//       console.log(potion.name);
//     }
//     return;
//   },
// };

// console.log(atTheOldToad.addHuyna(5));

//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       console.log(potion.name);
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let index = 0; index < this.potions.length; index++) {
//       if (this.potions[index].name === potionName) {
//         this.potions.splice(index, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//     //   console.log(potion.name);
//       if (potion.name === oldName) {
//         // console.log(`find name ${oldName}`);
//         potion.name = newName;
//       }
// }

//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// Change code above this line
// };

// console.log(atTheOldToad);
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log(atTheOldToad.getPotions());

// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`

// const numbers = [5, 10, 15, 20, 25];

// for (let i = 0; i < numbers.length; i++) {
//   if (i <= 3) {
//     console.log(`Індекс ${i} - значення ${numbers[i]}`);
//   } else {
//     break;
//   }
// }

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index} - значення ${number}`);
// });

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number, index) {
//     if (numbers[index] > value) {
//       filteredNumbers.push(numbers[index]);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//  orderedItems.forEach(function (number, index) {
//     totalPrice += orderedItems[index];
//   });

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const callback2 = function (value) {
//   return value <= 4;
// };

// console.log(filter([1, 2, 3, 4, 5, 6], callback1));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], callback2));

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готує ${dish}.`);
// };

// makeDish("Mango", "пиріг");
// makeDish("Mango", "супчик");
// makeDish("Mango", "котлетки");

// makeDish("Poly", "пиріг");
// makeDish("Poly", "супчик");
// makeDish("Poly", "котлетки");

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}.`);
//   };
//   return makeDish;
// };

// const mango = makeSheff("Mango");
// mango("пиріг");
// mango("супчик");

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// function changeEven(numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.555554567, 3)); 🍊🥕🧅🌶

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// console.log(const titles = books.map(book => books.title));

// const planets = ["Земля", "Марс", "Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.filter(
//   (planet, index, array) => array.indexOf(planet) === index
// );

// // const planetsInUpperCase = [];
// // for (const planet of planets) {
// //   planetsInUpperCase.push(planet.toUpperCase());
// // }
// console.log(planetsInUpperCase);
// console.log(planets);

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
// console.log(books);
// console.log(sortedByAuthorName);

// const sortByName = (users) => {
//   return [...users].sort((firstUser, secondUser) =>
//     firstUser.name.localeCompare(secondUser.name)
//   );
// };

// console.log(
//   sortByName([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book, index, array) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.title)
//   .sort();

// console.log(names);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// console.table(users);

// const allFriends = users.reduce((friends, user) => {
//   friends.push(...user.friends);
//   return friends;
// }, []);
// console.log(allFriends);

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// // Only change code below this line
// const wordBlanks =
//   myAdjective +
//   " " +
//   "cute " +
//   myNoun +
//   " " +
//   "can " +
//   myVerb +
//   " " +
//   "very " +
//   myAdverb +
//   ".";
// console.log(wordBlanks);

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = `${str}${this.value}`;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//   }
//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder);
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   #price;
//   MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.#MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   AccessLevel;
// }

// console.log(User.email);

// // ПРОТОТИПНЕ НАСЛІДУВАННЯУ
// У кожного обєкта є свойство __proto__ В цому свойстві лежить посилання на інший обєкт prototype.
// // Обїявити функцію конструктор і зробити прототип в який будем озаписувати всі функції

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };
// const mango = new User({ email: "mango@gmail.com", password: "111111" });

// console.log(mango);
// mango.changeEmail("newmail@gmail.com");
// console.log(mango);

// Варіант 1 звичайний
// const Car = function (config = {}) {
//   this.brand = config.brand;
//   this.model = config.model;
//   this.price = config.price;
// };

// const myCar = new Car({ brand: "Audi", model: "TT", price: "55000" });
// const myCar2 = new Car({ brand: "BMW", model: "X5", price: "52000" });
// const myCar3 = new Car();

// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);

// варіант 2 з деструктурізацією

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// Car.prototype.sayHello = function () {
//   console.log("hello ;)");
// };

// const myCar = new Car({ brand: "Audi", model: "TT", price: "55000" });
// const myCar2 = new Car({ brand: "BMW", model: "X5", price: "52000" });
// const myCar3 = new Car();

// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);

// myCar2.changePrice("100000");

// myCar2.sayHello();
// console.log(myCar2);

// карті блекджек
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (card >= 2 && card <= 6) {
//     count += 1;
//   } else if (
//     card === 10 ||
//     card == "J" ||
//     card == "Q" ||
//     card == "K" ||
//     card == "A"
//   ) {
//     count -= 1;
//   } else if (card >= 7 && card <= 9) {
//     count += 0;
//   }

//   if (count >= 1) {
//     return `${count} Bet`;
//   } else if (count < 0) {
//     return `${count} Hold`;
//   } else if (count === 0) {
//     return `${count} Hold`;
//   }

//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc());

// class Hero {
//   constructor({ name = "hero", xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} отримає ${amount} досвіду.`);
//     this.xp += amount;
//   }
// }

// const mango = new Hero({ name: "mango", xp: 1000 });

// mango.gainXp(1000);
// console.log(mango);

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
// }
// const ben = new Warrior("ben", 0, "bow" );
// ben.gainXp(1000);
// console.log(ben);

// Setup

// const myArray = [];

// // Only change code below this line
// const ourArray = [];
// let i = 5;

// while (i >= 0) {
//   ourArray.push(i);
//   i--;
// }
// console.log(ourArray);

// Задача написати функцію якак буде перемножати всі числа які є в підмаисвах і повертати результат.arr

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line

//   for (let i = 0; i < arr.length; i++) {
//     for (let y = 0; y < arr[i].length; y++) {
//       console.log(arr[i][y]);
//       product *= arr[i][y];
//     }
//   }

//   // Only change code above this line
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
