// 1. Есть массив чисел. Преобразуй массив так, чтобы там были квадраты чисел. 
// Пример: [2, 3] -> [4, 9];

let squaresArray = [2, 3];
squaresArray = squaresArray.map(num => num * num);
console.log(squaresArray);

// 2. Есть массив c повторяющимися элементами. 
// Отфильтруй массив так, чтобы там остались только уникальные элементы. 
// Пример: [1, 2, 2, 3, 4, 5, 5, 5, 6] -> [1, 2, 3, 4, 5, 6];

let notFilteredArray = [1, 2, 2, 3, 4, 5, 5, 5, 6];
let filteredArray = notFilteredArray.filter((num, index) => notFilteredArray.indexOf(num) === index);

console.log(filteredArray); 

// 3. Есть массив чисел, посчитай сумму его элементов. 
// Пример: [1, 2, 3] -> 6. Подсказка: используй reduce;

const arrayForSum = [1, 2, 3];
const sum = arrayForSum.reduce((total, num) => total + num, 0);

console.log(sum);

// 4. Напиши программу, которая развернет массив, то есть все элементы будут в обратном порядке. 
// Нельзя использовать reverse()!

const directArray = [1, 2, 3, 5, 5, 1];
let reversedArray = [];

directArray.forEach(num => reversedArray.unshift(num));

console.log('Исходный массив: ', directArray);
console.log('Преобразованный массив: ', reversedArray);

// 5. Создай две переменных - две строки с использованием let и const. 
// Попробуйте изменить значения всех этих переменных. 
// Создайте два массива с использованием let и const. 
// Попробуйте изменить массивы (добавить и удалить элементы) и переопределить сами массивы. 
// Посмотри на результаты и объясни своими словами (да, опять🙂), что и почему так произошло.

let letString = "Let String";
const constString = "Const String";

letString = "Edited Let String";
//constString = "Edited Const String"; 

/*
constString - переменная задана через const, переопределять нельзя
*/

let letArray = [1, 2, 3];
const constArray = ['a', 'b', 'c'];

letArray.pop();
letArray.push(4);

constArray.pop();
constArray.push('d');

console.log(letArray);
console.log(constArray);

letArray = [5, 6];
// constArray = ['x', 'z'];

/*
constArray - переменная задана через const, переопределять нельзя, но изменять через методы можно 🙂
*/