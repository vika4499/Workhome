function getMin(a, b) {
    return a < b ? a : b;
}

function checkParity (num) {
    if (num % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное"; 
    }
}

function printSquare(num) {
    console.log (num * num);
}

function getSquare(num) {
    return num * num;
}

function qreetUser() {
    let age = prompt ("Сколько вам лет?");
    if (age < 0) {
        console.log("Вы ввели неправельное значение");
    } else if (age <=12) {
        console.log("Привет, друг!");
    } else (age <=12) {
        console.log("Добро пожаловать!");
    }
}

function multiplyNumbers(a, b){
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

function cubeNumber() {
    let num = prompt("Ведите число:");
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;    
    }
}
console.log(cubeNumber());

function getArea() {
    return Math.PI * this.radius * this.radius;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 5,
    getArea,
    getPerimeter,
};
const circle2 = {
    radius: 10,
    getArea,
    getPerimeter,
};

function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8){
        return "Лето";
    } else if (month >= 9 && month <= 11){
        return "Осень";
    } else if (month >= 12 && month <= 1){
        return "Зима";
    } else {
        return "Неизвестное значение";
    }
}
console.log(getSeason(prompt("Введите число:")));