// 1 задание
// Есть несколько числовых переменных (задай их самостоятельно). С помощью арифметических 
// операторов и операторов сравнения определи, четное это число или нет;

const firstNum = 55;
const secondNum = 64;
const thirdNum = 5;

console.log(`Число: ${firstNum}, четное - ${firstNum % 2 === 0}`)
console.log(`Число: ${secondNum}, четное - ${secondNum % 2 === 0}`)
console.log(`Число: ${thirdNum}, четное - ${thirdNum % 2 === 0}`)

// 2 задание
// Напиши программу, которая проверяет, если переменная name пуста или не задана, то в консоль
// должно выводиться сообщение "Hello, Guest!". Если переменная name содержит значение, то 
// программа должна вывести сообщение "Hello, [name]!", где [name] — это значение переменной.

const myName = "Natali";
const defaultName = "Guest";

console.log(`Hello, ${myName || defaultName}!`)

const nullName = null;

console.log(`Hello, ${nullName || defaultName}!`)