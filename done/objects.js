// 1. Создай объект, ключи в котором будут описывать тебя. 
// Например, твое имя, возраст, увлечения и т.д. 
// Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. 
// Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);   

const person = {
    name: 'Natali',
    age: 27,
    isEmployed: true,
    hobbies : ['music', 'films', 'plants']
}

console.log('1 задание')
console.log(person)

for (let key in person) {
 console.log(`${key}: ${person[key]}`);
}

console.log(Object.entries(person));

// 2. В объект из предыдущего пункта:
// - добавь новое свойство;
// - измени значение существующего свойства;
// - удали любое свойство.
// И снова выведи все свойства объекта в консоль разными способами!


person.hobbies.push('skateboarding');
person.city = 'Saint Petersburg';
delete person.isEmployed;

console.log('2 задание')
console.log(person)

for (let key in person) {
 console.log(`${key}: ${person[key]}`);
}

console.log(Object.entries(person));
