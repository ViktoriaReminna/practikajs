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

//TODO:======================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply

// class Calc {
//   constructor() {
//     this.number = 0;
//   }

//   get finalNumber() {
//     return this.number;
//   }

//   add(number) {
//     return (this.number += number);
//   }

//   subs(number) {
//     return (this.number -= number);
//   }
//   divide(number) {
//     if (number !== 0) {
//       return (this.number /= number);
//     } else {
//       return `На нуль неможна делити!`;
//     }
//   }

//   multiply(number) {
//     return (this.number *= number);
//   }
// }

// const calc = new Calc();

// calc.add(5);
// calc.subs(3);
// calc.divide(2);
// calc.multiply(22);

// console.log(calc.finalNumber);

//TODO:======================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getInfo() {
    return `name: ${this.name}, type: ${this.type}`;
  }
}
class Mammal extends Animal {
  constructor(name, type, ability) {
    super(name, type);
    this.ability = ability;
  }

  getInfo() {
    return `${super.getInfo()}, ability: ${this.ability}`;
  }
}

const elephant = new Mammal(
  "Bimba",
  "african elephant",
  "can reach food with his trunk"
);

const lion = new Mammal(
  "Simba",
  "african lion",
  "can reach food with his teeth"
);

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(newAnimal) {
    this.animals.push(newAnimal);
  }

  allAnimals() {
    this.animals.forEach((animal) => console.log(animal.getInfo()));
  }
}

const zoo = new Zoo();
zoo.addAnimal(elephant);
zoo.addAnimal(lion);

zoo.allAnimals();
