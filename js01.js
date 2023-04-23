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