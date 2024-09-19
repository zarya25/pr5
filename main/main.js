'use strict';
//  1 задание
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let salary of Object.values(salaries)) {
    sum += salary;
}

alert(sum);

//  2 задание
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

//  3 задание

let calculator = {
    a: 0,
    b: 0,

    read() {
        this.a = Number(prompt("Введите 1 число:", 0));
        this.b = Number(prompt("Введите 2 число:", 0));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//  4 задание
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
alert(extractCurrencyValue("$120"));

//  5 задание
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

alert(names); 

//  6 задание
function getAverageAge(users) {
    return users.reduce((total, user) => total + user.age, 0) / users.length;
  }
  alert(getAverageAge(users));  


