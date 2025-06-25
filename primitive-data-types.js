// 1. Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";

const str = "JavaScript is fun!";
console.log(str.includes("fun"));

// 2. Попробуй написать условие, которое выполняется только в случае, 
// если переменная имеет одно из falsy значений;

const inputValue = prompt();
if (!inputValue) {
    console.log(`${inputValue} - falsy-значение`)
}


// 3. Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation, 
// и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";

const firstName = 'John';
const lastName = 'Doe';
const occupation = 'software developer';

console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`);

// 4. Сравни null и undefined строго (===) и не строго (==), 
// выведи результаты в консоль. Объясни своими словами, почему получились такие результаты 🙂

console.log('Строгое сравнение: ', null === undefined);

console.log('Нетрогое сравнение: ', null == undefined);

/*
null и undefined - являются falsy значениями, но разными типами данных
При нестрогом сравнении их тип данных не учитывается -> результат сравнения - true
При строгом сравнении тип данных учитывается -> результат сравнениея - false
*/


// 5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS... 
// И снова попрошу тебя объяснить своими словами, что произошло🙂

console.log(1 + '1')

/*
🙂 число 1 при выводе в консоль проводится к строковому типу данных и происходит конкатенация двух строк
*/