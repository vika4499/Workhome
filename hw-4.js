for (let i = 0; i < 2; i++){
    console.log ("Привет");
}

for ( let i = 1; i <= 5; i++){
    console.log(i);
}

for (let i = 7; i <= 22; i++){
    console.log(i);
}

let obj = {
    "Коля": "200",
    "Вася": "300"
    "Петя": "400"
};
for (let key in obj){
    console.log(`${key}- зарплата ${obj[key]} долларов.`);
}

let n = 1000;
let num = 0;
while (n >= 50){
    n/=2;
    num++;
}
console.log (n);
console.log (num);

let firstFriday = 5;
for (let i = firstFriday; i <= 31; i+=7){
    console.log(`Сегодня пятница, ${i}- e число. Необходимо подготовить отчет.`);
}
