let a = 10;
alert (a);
a = 20;
alert (a);

const iPhoneReleaseYear = 2007;
alert (iPhoneReleaseYear);

const JavaScriptCreator = "Brendan Eich";
alert (JavaScriptCreator);

const n1 = 10;
const n2 = 2;
alert (n1 + n2);
alert (n1 - n2);
alert (n1 * n2);
alert (n1 / n2);

let result = 2**5;
alert (result);

let a = 9;
let b = 2;
let remiander = a % b;
alert (remiander);

let n = 1;
n += 5;
n -= 3;
n *= 7;
n /= 3;
n++;
n--;
alert (n);

let age = prompt ("Сколько Вам лет?");
alert (age);

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
user ["cityOfResidence"] = "New York";
user.age = 35;
delete user ["cityOfResidence"];

let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]);

let userName = prompt ("Как Вас зовут?");
alert (`Привет,${userName}!`);

