// 1 задание
// Объяви переменные и присвой им значения разных типов. Используй оператор typeof, чтобы вывести 
// в консоль типы этих переменных;
const text = "абракабабра";
console.log(typeof text);

const number = 22;
console.log(typeof number);

const isTrue = true;
console.log(typeof isTrue);

let undefinedVar;
console.log(typeof undefinedVar);

let nullVar = null;
console.log(typeof nullVar);


// 2 задание
// Изучи разницу между хранением данных по ссылке и по значению более детально. Напиши своими  
// словами, как ты это понял. Приведи примеры, которые показывают эту разницу. 

/* 
При хранении данных по ссылке, переменная хранит адрес области памяти, в которой хранится переменная
При присвоении ссылочных переменных другой переменной, передаётся ссылка, а не само значение переменной
*/

let a = 10;
let b = a;

console.log(`Число a: ${a}\nЧисло b: ${b}`)

a = 11;

console.log(`Число a: ${a}\nЧисло b: ${b}\n\nИзменили значение число a, число b осталось равно прежнему значению`)

let firstArray = [1];
let secondArray = firstArray;

console.log(`Выведем первый массив: ${firstArray}\nВыведем второй массив: ${secondArray}`)

firstArray.push(2)
console.log(`Изменим первый массив\nВыведем первый массив: ${firstArray}\nВыведем второй массив: ${secondArray}\n\nИзменили первый массив, второй массив тоже изменился`)

secondArray.push(3)
console.log(`Изменим первый массив\nВыведем первый массив: ${firstArray}\nВыведем второй массив: ${secondArray}\n\nИзменили второй массив, первый массив тоже изменился`)