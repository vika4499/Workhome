const arr = [1, 5, 4, 10, 0, 3];
for (let value of arr) {
    console.log(value);
    if (value === 10) {
        break;
    }
}

const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
    console.log(index);

const arr = [1, 3, 5, 10, 20];
const str = arr.join(' ');
console.log(str);

let arr = [];
for (let i = 0; i < 3; i++) {
    let innerArr = [];
    for(let j = 0; j < 3; j++) {
        innerArr.push(1);
    }
    arr.push(innerArr);
}
console.log(arr);

const arr = [1, 1, 1];
arr.push(2, 2, 2);

console.log(arr);

let arr = [9, 8, 7, 'a', 6, 5];
arr.sort((a, b) => a - b).pop();
console.log(arr);

const arr = [9, 8, 7, 6, 5];
const quess = Number(prompt("Угадайте число:"),10);
if (arr.includes(quess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

const arr = [[1, 2, 3], [4, 5, 6]];
const flatArr = arr.flat();
console.log(flatArr);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.lendth - 1; i++) {
    console.log(arr[i]+ arr[i + 1]);
}

function getSquaredNumbers(arr) {
    return arr.map(num => num *num);
}

function getLengthWords(words) {
    return words.map(word => word.length);
}

function filterPositive(array) {
    let result = [];
    for (let i = 0; i < array.length; i++);{
        if (array[i] < 0) {
            result.push(array[i]);
        }
    }
    return result;
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


