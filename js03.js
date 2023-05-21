// /TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {

//     const userName = prompt("enter your name")

//     if (!userName) {
//         return console.log("try again")
//     }
//         return callback(userName)
//         }

// const greet = name => {
// return `Привіт ${name}`
// }
// console.log(letMeSeeYourName(greet))

//TODO:==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
//

// const makeProduct = (name, price, callback) => {

//     const item = {
//         name,
//         price,
//         id: Math.random(),
//     }
//     return callback(item);

// }

// const showProduct = (product) => {
//     return product;
// }

// console.log(makeProduct("potato", 40, showProduct))

//TODO:==============================================
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = (shefName, dish) => {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeShef = (shefName) => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };

// const mango = makeShef("Mango");
// console.log(mango);
// mango("potato");

//TODO:==============================================
//Виправте помилки, щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();
