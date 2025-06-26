// 1. Напиши программу, которая проверяет число и выводит сообщение, 
// является ли оно положительным, отрицательным или нулем;

let inputNumber = parseFloat(prompt('Введите число:'));
if (isNaN(inputNumber)) { //на самом деле тут лучше использовать цикл, и проверять на число пока пользователь не введет корректные данные,
    //но урок по условиям поэтому сделаю допущение, что пользователь со второго раза пользователь введет корректные данные
    alert('Пожалуйста, введите число');
    inputNumber = parseFloat(prompt('Введите число:'));
}

if (inputNumber > 0) {
    alert('Число положительное');
} else if (inputNumber < 0) {
    alert('Число отрицательное');
} else {
    alert('Число равно нулю');
}

// 2. Напиши программу, которая запрашивает у пользователя его рост и вес, на основании этих данных вычисляет ИМТ,
//  и выводит сообщение о том, в каком диапазоне находится его ИМТ;

const weight = parseFloat(prompt('Введите ваш вес (кг):'));
const height = parseFloat(prompt('Введите ваш рост (м):'));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Пожалуйста, введите корректные значения');
    return
}

const bmi = weight / (height * height);

if (bmi < 16) {
    alert('Выраженный дефицит массы тела');
} else if (bmi < 18.5) {
    alert('Недостаточная масса тела');
} else if (bmi < 25) {
    alert('Нормальная масса тела');
} else if (bmi < 30) {
    alert('Избыточная масса тела (предожирение)');
} else if (bmi < 35) {
    alert('Ожирение 1 степени');
} else if (bmi < 40) {
    alert('Ожирение 2 степени');
} else {
    alert('Ожирение 3 степени');
}


// 3. Используй оператор switch, чтобы вывести название месяца 
// на основе введенного пользователем числа (1-12);

const monthNumber = parseInt(prompt('Введите номер месяца (1-12):'));
let monthName;

switch (monthNumber) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверно введены данные';
}

console.log(monthName);

// 4. Придумай свое условие и опиши его в помощью оператора switch/case.

const value = parseFloat(prompt('Введите значение:'));
const choice = parseInt(prompt('Введите изначальную единицу измерений:\n1. мм\n2. см\n3. дм.\n4. км.'));

let convertLengthToMeters;
switch (choice) {
    case 1:
        convertLengthToMeters = value * 0.001;
        break;
    case 2:
        convertLengthToMeters = value * 0.01;
        break;
    case 3:
        convertLengthToMeters = value * 0.1;
        break;
    case 4:
        convertLengthToMeters = value * 1000;
        break;
    default:
        convertLengthToMeters = 'Неверно введены данные';
}

console.log('Значение в м:' ,convertLengthToMeters);