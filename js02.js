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



// const salaries = {
//   john: 100,
//   Pete: 300,
//   Mary: 250,
// }

// function topSalary(salariesData) {
//   let topPaidEmployeeName = 0;
//   let topSalary = 0;
 
//   const newArray = Object.entries(salariesData);

//   console.log(newArray);
  
//   for (let [name, salary] of newArray) {
//     if (salary > topSalary) {
//       topSalary = salary;
//       topPaidEmployeeName = name;
//     }
    
//   }

//   return topPaidEmployeeName ;
// }
// console.log(topSalary(salaries))


// function girl({ name, age, weight } = {name: "Anonimus",}) {
  
//   return ` Hi ${name}, yours age ${age}, yours weight ${weight}. Welcome!`;
// }
// console.log(girl({ age: 15 , name: "Anna", weight: 45 }))


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//  const newObject = {
//     category: category,
//     priority: priority,
//     completed: completed,
//     ...data,
//   };
//   return newObject;
  
//   // Change code above this line
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash", tip: "Take out the trash" }))

// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// ......................................................



// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// ......................................................

// function formalGreeting() {
//   console.log("How are you?");
// }
// function casualGreeting() {
//   console.log("What's up?");
// }
// function greet(type, greetFormal, greetCasual) {
//   if(type === 'formal') {
//     greetFormal();
//   } else if(type === 'casual') {
//     greetCasual();
//   }
// }
// // выводит 'What's up?'
// greet('casual', formalGreeting, casualGreeting);


// ......................................................


// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Манго");



// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);




// ......................................................


// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


// // ......................................................

// function first(y) {
//   console.log(1);
//   y()
// }

// function second(a,b) {
  
  
//   if (a < b) {
//     console.log(`${a} is smaller than ${b}`)
//     return;
//   }
//   return console.log(`${a} is bigger than ${b}`)
// }

// first(function () {
//   second(6,5)
// });


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
 
//   hexColors.push(hex);
  
//   rgbColors.push(rgb);
// }
// console.log(hexColors)

// //😋

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
 
// const pointer = makePizza;

// console.log(result)
// console.log(pointer)

//------------------------------------------


// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
  
// }

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }


// console.log(makeMessage("Royal Grand", makePizza))// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza))// повертає рядок "Delivering Ultracheese pizza."


// //------------------------------------------


// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });


// //------------------------------------------


// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       console.log(onSuccess(pizzaName))
//       return onSuccess(pizzaName)
//     }
//     console.log(onError(pizzaName))
//     return onError(pizzaName)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);


// //------------------------------------------

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function(element){
//     totalPrice += element;
//   })
   

//   // Change code above this line
//   console.log(totalPrice)
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4]) //повертає 138
// calculateTotalPrice([164, 48, 291]) //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116

// //------------------------------------------


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
// firstArray.forEach((element) => {
//   if (firstArray.includes(element) === secondArray.includes(element)) {
//     commonElements.push(element)
//   }
    
// });
   
  
//   return commonElements;

//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

//---------------------------------------------//
//-------Map()---------Map()---------Map()-----------//
     //преобразует массив в новые массив//
//---------------------------------------------//


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const newArray = students.map(students => (students.score * 2))
// console.log(newArray)// [166, 118, 74, 188, 128]


//---------------------------------------------//
//-------flatMap()------flatMap()------flatMap()-------//
       //преобразует массив в новые массив, но с уникальностями//
//---------------------------------------------//



// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const newArrayCourses = students.map((students) => students.courses)
// console.log(newArrayCourses)// массив из массивов элементов ['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']
// const newListCourses = students.flatMap((students) => students.courses)
// console.log(newListCourses)// массив со списком элементов ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія']


//---------------------------------------------//
//-------filter()------filter()------filter()-------//
      //фильтрует массив под соотв. требования//
//---------------------------------------------//

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]



// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
//   );
// console.log(uniqueCourses)
  

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const higthBal = students.filter(students=> students.score >= HIGH_SCORE)
// console.log(higthBal)


//---------------------------------------------//
//-------find()------find()------find()-------//
        //ищет до первого соответствия//
//---------------------------------------------//


// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(option => option.label === "pink")); // { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === "white")); // undefined



//---------------------------------------------//
//-------findIndex()------findIndex()------findIndex()-------//
        //ищет соотв. индекс//
//---------------------------------------------//

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex(option => option.label === "blue"); // 2
// colorPickerOptions.findIndex(option => option.label === "pink"); // 3
// colorPickerOptions.findIndex(option => option.label === "white"); // -1


//---------------------------------------------//
//-------every()------every()------every()-------//
        //проверяет все ли элементы соответствуют//
//---------------------------------------------//

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false


//---------------------------------------------//
//-------some()------some()------some()-------//
        //проверяет хотя бы один элемент соответствуют//
//---------------------------------------------//


// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false



// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const totalBal = students.reduce((total, element) => total += element.score, 0)

// console.log(totalBal)
// const averageBal = totalBal / students.length
// console.log(averageBal)


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];



//---------------------------------------------//


// ункція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.Ф


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// numbers.forEach(element => {
//     if (element > value) {
//   filteredNumbers.push(element)
// }
  
// });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) //повертає [4, 5])
// console.log(filterArray([1, 2, 3, 4, 5], 4)) //повертає [5])



// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item =>
//     totalPrice += item);
 

//  return totalPrice
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) //повертає 138

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item =>
//     totalPrice += item);
 

//  return totalPrice
// }


// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
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


//---------------------------------------------//

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(element => {
    
//     if (element % 2 === 0) {
// element = element +value
//     }
//     newArray.push(element)
//       });
//   return newArray
// }

// const newMassive = changeEven([1, 2, 3, 4, 5], 10) //повертає новий масив [1, 12, 3, 14, 5]
// console.log(newMassive)


//---------------------------------------------//


// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
//   Обов'язково використовуй метод map().


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planets => planets.length)
// console.table(planetsLengths)

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

// const titles = books.map(books => books.title);
// const titl  = books.flatMap(books => books.title);
// console.log(titles)
// console.log(titl)



//---------------------------------------------//

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(el => el % 2 === 0);
// const oddNumbers = numbers.filter(el => el % 2 !== 0);
// console.log(evenNumbers)


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);
// console.log(allGenres)
// console.log(uniqueGenres)


//---------------------------------------------//

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

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author.includes(AUTHOR) );
// console.table(booksByAuthor)
// console.table(topRatedBooks)



//---------------------------------------------//



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 28,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 45,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//      age: 38,
  
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 24
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 32
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 64
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age:18
//   }
// ]


// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr

// const getUsersWithEyeColor = (users, color) => {
//   const newArray = users.filter(user => user.eyeColor === color);
//   console.table(newArray)
//   return newArray;
// };
// getUsersWithEyeColor(users, "brown" )


// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
  
//  const getUsersWithEyeColor = (users, minAge, maxAge) => {
//   const newArray = users.filter(user => user.age > minAge && user.age < maxAge);
//   console.table(newArray)
//   return newArray;
// };
// getUsersWithEyeColor(users, 20, 30)


// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

//  const getUsersWithEyeColor = (users, friendName) => {
//   const newArray = users.filter(user => user.friends.includes(friendName));
//   console.table(newArray)
//   return newArray;
// };
// getUsersWithEyeColor(users, "Briana Decker")


// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

//  const getUsersWithEyeColor = users => {
//    const newArray = users.flatMap(user => user.friends);
//    const arrayFriends = newArray.filter((element, index, array) => array.indexOf(element) === index);
//    console.table(newArray)
//    console.table(arrayFriends)
//   return newArray;
// };
// getUsersWithEyeColor(users)


// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

//  const getUsersWithEyeColor = users => {
//    const newArray = users.filter(user => user.isActive);
//   //  const arrayFriends = newArray.filter((element) => );
//    console.table(newArray)
  
//   return newArray;
// };
// getUsersWithEyeColor(users)

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// Change code below this line
// const getUserWithEmail = (users, email) => {
//   const newArray = users.find(user => user.email === email)
 
//   return newArray
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))

//---------------------------------------------//


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// console.log(eachElementInFirstIsEven)

//---------------------------------------------//

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((calck, elem) => { calck += elem;  return calck}, 0);
// console.log(totalPlayTime)

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime)

//---------------------------------------------//

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((calck, element) =>
// calck += element.playtime, 0);
// const totalAverageGamesPlayed = players.reduce((calck, element) =>
// calck += element.gamesPlayed, 0);
// const averageTime =  totalAveragePlaytimePerGame / totalAverageGamesPlayed

// console.log(totalAveragePlaytimePerGame)
// console.log(totalAverageGamesPlayed)

// const totalAveragePlaytimePerGame1 = players.reduce((total, element) => total += element.playtime / element.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame1)


// console.log(totalAveragePlaytimePerGame)
// const arrayPlayTime = players.map(element => element.playtime )
// console.log(arrayPlayTime)

// let totalPlaytime = 0;
// const arrayPlay = arrayPlayTime.forEach(element => {
//   totalPlaytime += element;
//   return totalPlaytime;
// })
// console.table(totalPlaytime)


//---------------------------------------------//

// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.



// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((total, element) => total += element.balance, 0)
//   console.log(totalBalance)
// return totalBalance
// };

// const getTotalFriendCount = users => {
//   const totalFriends = users.flatMap(elem => elem.friends).length
//   // const totalFriendsQuantity = totalFriends.length
//   console.log(totalFriends)
//   // console.log(totalFriendsQuantity)
// };


// const getTotalFriendCount = users => {
//   const totalFriends = users.reduce((calk, elem) => calk += elem.friends.length, 0)
//   console.log(totalFriends)
// };
// getTotalFriendCount(users)


//---------------------------------------------//


//  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates.slice().sort();
// console.log(ascendingReleaseDates)

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors)

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates)

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates)

//---------------------------------------------//


// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b) );
// console.log(authorsInAlphabetOrder)
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder)



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

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.


// const sortedByAuthorName = [...books].sort((name, b) => name.author.localeCompare(b.author));
// console.table(sortedByAuthorName)

// const sortedByReversedAuthorName = [...books].sort((name, b) => b.author.localeCompare(name.author));
// console.table(sortedByReversedAuthorName)

// const sortedByAscendingRating = [...books].sort((name, b) => name.rating- b.rating);
// console.table(sortedByAscendingRating)
// const sortedByDescentingRating = [...books].sort((name, b) => b.rating-name.rating);
// console.table(sortedByDescentingRating)

// //---------------------------------------------//


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder)
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder)
// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder)

 //---------------------------------------------//


//  Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).

// const sortByAscendingBalance = users => {
//    const userBalance = [...users].sort((name, b) => name.balance- b.balance);
//   console.table(userBalance)
//   // const UserName = userBalance.flatMap(ele => ele.name)
//   // console.table(UserName)
// };
// sortByAscendingBalance(users)


// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).


// const sortByDescendingFriendCount = users => {
//   const userFriends = [...users].sort((name, b) => b.friends.length - name.friends.length);
//   console.table(userFriends)
//   return userFriends
// };

// sortByDescendingFriendCount(users)





// const sortedByAuthorName = [...books].sort((name, b) => name.author.localeCompare(b.author));
// console.table(sortedByAuthorName)

// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const sortByName = users => {
// const userName = [...users].sort((a, b) => a.name.localeCompare(b.name));
//   console.table(userName )
//   return userName
// };
// sortByName(users)




//---------------------------------------------//


// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.



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

// // Change code below this line

// const names = [...books].filter(el => el.rating > 8).sort((a, b) => a.author.localeCompare(b.author)).map((el) => el.author);
// console.table(names)

// const unikName = names.map((el) => el.author)
// // const sort = names.sort((a, b) => a.author.localeCompare(b.author));
//   // .sort((a, b) => a.names.localeCompare(b.names));
// console.table(unikName)
// console.table(sort)

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]



//---------------------------------------------//

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).


// const getNamesSortedByFriendCount = users => {
//   const quantityFriends = [...users].sort((a, b) => a.friends.length - b.friends.length).map(el=> el.name)
//   console.table(quantityFriends)
//   return quantityFriends
// };

// getNamesSortedByFriendCount(users)


// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.

// const getSortedFriends = users => {
//   const unickFriends = [...users].flatMap(el => el.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort((a,b) => a.localeCompare(b))
  
//   console.table(unickFriends)
// //   const ascending = unickFriends.sort((a,b) => a.localeCompare(b))
// // console.table(ascending)
//   return unickFriends
// };
// getSortedFriends(users)



// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.


// const getTotalBalanceByGender = (users, gender) => {
//   const newArray = users.filter(el => el.gender ===  gender).reduce((sum, element) => sum +=element.balance, 0)
//   console.table(newArray)
//   return newArray
// };
// getTotalBalanceByGender(users, "female" )



// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this.username);
//   },
//   showName() {
//     console.log(this);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'




// function showThis() {
//   console.log("this in showThis: ", this);
// }


// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// console.log(makeMessage(customer.getFullName)); // Буде помилка у виклику функції


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}


// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }
// console.log(mango.name)


// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.email); // Виникне помилка, це приватна властивість


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     console.log(emails)
//     const uniqueEmails = new Set(emails);
//     console.log(uniqueEmails)
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersByEmail("aemis@coldmail.net"))
// console.table(historyService.orders)
// console.log(historyService.getOrdersLog())
// console.log(historyService.getEmails())


// class Car {
//   // Change code below this line
// constructor(brand, model, price){
//   this.brand = brand;
//     this.model = model;
//     this.price = price;
// }
  


//   // Change code above this line
// }
// const newCar = new Car ("Audi", "Q3", 36000)

// console.log(newCar)// утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }



// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

// getPrice(){
//   return this.price
// }
//   changePrice(newPrice) {
//     return this.price = newPrice
//   }

//   // Change code above this line
// }

// const newCar1 = new Car({ name: "Audi", model: "Q3", price: 36000 })

// console.log(newCar1)

// const newCar2 = new Car({ name: "Audi", model: "Q3", price: 40000 })
// console.log(newCar2)


// class Storage {
//   constructor([...items]) {
// this.items = items
//   }
//   getItems() {
//     return this.items
//   }
//   addItem(newItem) {

//      this.items.push(newItem)
//   }
//   removeItem(removeItems) {
//     const index = this.items.indexOf(removeItems)
  
//     for (const element of this.items) {
//       if (element === removeItems) {
//         this.items.splice(index, 1)
//       }
  
//     }
//   }

// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]





// Завдання 11/20
// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// class StringBuilder {
//   constructor(initialValue) {
//     this.initialValue = initialValue
//   }
//   getValue() {
//     return this.initialValue
//   }
//   padStart(str) {
//    this.initialValue = this.initialValue.padStart(2,str)
  
//   }
//   padEnd(stri) {
//     this.initialValue = this.initialValue.padEnd(3,stri)
//   }
//   padBoth(string) {
//     this.initialValue = this.initialValue.padStart(4,string).padEnd(5,string)
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.


// class StringBuilder {
//   constructor(value) {
//     this.value = value
//   }
//   getValue() {
//     return this.value
//   }
//   padStart(str) {
//    this.value = this.value.padStart(2,str)
  
//   }
//   padEnd(stri) {
//     this.value = this.value.padEnd(3,stri)
//   }
//   padBoth(string) {
//     this.value = this.value.padStart(4,string).padEnd(5,string)
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




// class Car {
//   // Change code below this line

//   #brand;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand(){
//     return this.#brand
//   }
// changeBrand(newBrand) {
//   this.#brand = newBrand
// }
//   // Change code above this line
// }
// const newCar = new Car({ brand: "Audi", model: "Q3", price: 36000 })// утвориться об'єкт { model: "Q3", price: 36000 }
// console.log(newCar)

// const newCar2 = new Car({ brand: "bmw", model: "X5", price: 58900 }) //утвориться об'єкт { model: "X5", price: 58900 }
// console.log(newCar2)




// class Storage {
//   // Change code below this line
// #items;
  
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]




// class StringBuilder {
//   // Change code below this line
// #value;
  
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   };

//   get brand() {
//     return this.#brand;
//   }

//   set brand (newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//  get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }





// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"



// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
 
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//             return this.#price;
//     }
//     return this.#price = newPrice
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
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));



// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price) {
//     if(price > Car.#MAX_PRICE) {
//      return "Error! Price exceeds the maximum"
//     }
//     return "Success! Price is within acceptable limits"
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"



// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.


// class User {
//   email;

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

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;
//   constructor({ email, accessLevel }) {
//     super(email)
//     this.accessLevel = accessLevel
//   }
  

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"



// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.


// class User {
// //   email;

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

// class Admin extends User {
//   // Change code below this line

  
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
  
//   blacklistedEmails = [];
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true
//     }
//     return false
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true