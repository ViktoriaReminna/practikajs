//TODO:==============================================
//Виправте помилки, щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsey", isActive: false },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// Для кожного елемента колекції (user) перевіримо поле isActive.
// Якщо воно true, то поточний елемент (user) буде записаний результуючий масив.

//Дізнатись загальні роки практики в об'єкті workers

// const workers = [
//   { id: 10, name: "Mango", years: 14 },
//   { id: 2, name: "Poly", years: 19 },
//   { id: 41, name: "Ajax", years: 30 },
//   { id: 99, name: "Kiwi", years: 22 },
// ];

// const totalYears = workers.reduce((acc, worker) => {
//  return acc += worker.years;
// }, 0);
// console.log(totalYears);

//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }

//   get login() {
//     return this.#login;
//   }

//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }

//   get email() {
//     return this.#email;
//   }

//   get clientData() {
//     return { login: this.#login, email: this.#email };
//   }
// }

// const biscuit = new Client("pixie", "pixie@mail.com");
// console.log((biscuit.login = "dandelion"));
// console.log(biscuit.clientData);
