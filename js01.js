// Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// то показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"
// const jsName = prompt("Яка офіційна назва JavaScript?");
// let message = "ECMAScript";
// if (jsName === message) {
//     alert("Вірно!");
// }
// else {
//      alert("Не знаєте? ECMAScript!");
// }

//2. Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const globalMinutes = prompt("Введіть хвилини");
// let hours = Math.floor(globalMinutes / 60);
// const hoursModified = String(hours).padStart(2, "0");

// console.log(hoursModified);
// const minutes = globalMinutes % 60;
// const minutesModified = String(minutes).padStart(2, "0");
// console.log(minutesModified);
// const time = `${hoursModified}:${minutesModified}`;

// console.log(time);

// 3.  Напишіть цикл, який виводить у консоль числа від max до min за спаданням
//  Виведіть у консоль  усіх парних чисел від min до max
// const max = 50;
// const min = 23;

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

4; // Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний", то вивести рядок "Здрастуйте!"
//інакше виводити рядок "Невірний пароль!"

// let login = prompt("");
// console.log(login);

// if (login === "Адмін") {
//   const password = prompt("Введить пароль");
//   console.log(password);
//   if (password) {
//     if (password === "Я головний") {
//       console.log("Здрастуйте!");
//     } else {
//       console.log("Невірний пароль!");
//     }
//   } else {
//     console.log("Скасовано");
//   }
// } else {
//   console.log("Я вас не знаю!");
// }
// 5. При завантаженні сторінки користувачеві пропонується
// В prompt ввести число. Введення додається до значення
// Змінної total.
// Операція введення числа триває до того часу,
// Поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши накнопку Cancel,
//  показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число, а не довільний набір символів не потрібно.

// let userNumber = prompt("Введить число");
// let total = 0;
// let buleanNumber = false;

// do {
//   if (userNumber) {
//     buleanNumber = true;
//     total = total + Number(userNumber);
//     userNumber = prompt("Введить число");
//   } else {
//     buleanNumber = false;
//     console.log(`Загальна сума введених чисел дорівнює ${total}.`);
//   }
// } while (buleanNumber);


//Напишіть через свіч пошуку автора мови програмування
// пишемо назву мови у шаблонному рядку отримує відповідь мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта //Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const author = prompt('Please type in the programming language name').toLowerCase();

// switch (author) {
//     case 'PHP':
//         console.log(`${author} Расмус Лердорф`);
//         break;
//         case 'C#':
//         console.log(`${author} група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта //Вільтаумота`);
//         break;
//         case 'Swift':
//         console.log(`${author} Кріс Латтнер`);
//         break;
//         case 'JS':
//         console.log(`${author} Брендан Ейх`);
//         break;
//         case 'java':
//         console.log(`${author} Джеймс Гослінг`);
//         break;
//         case 'Python':
//         console.log(`${author} Гвідо ван Россум`);
//         break;

//     default:console.log(`I do not know this type of language`);
//         break;
// }

// Запитати у користувача ім’я, пошту , телефон, 
// та показати у консолі "користувач __ використовує  __ пошту __ телефон"

// const userName = prompt ('Type your name')
// const userMail = prompt ('Type your email')
// const userPhone = prompt ('Type your phone')
// console.log (`користувач ${userName} використовує  ${userMail} пошту ${userPhone} телефон`);


