// 1. Напиши программу, которая использует цикл for, чтобы вывести числа от 1 до 10;

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Напиши программу, которая использует цикл while, чтобы посчитать сумму чисел от 1 до 100;

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log('Сумма чисел от 1 до 100: ', sum)

// 3.*Выведи в консоль все простые числа от 0 до 100.

let n = 1;

while (n < 100) {
  n += 1; // проверка начинается с числа 2
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      count += 1;
    }
  }
  if (count == 2) {
    console.log(n)
  }  
}

console.log('Вывод простых чисел с проверкой до квадрата числа')

n = 2; // начальное значение, простые числа начинаются с 2

while (n <= 100) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
    }
  }
  if (isPrime) {
  console.log(n);
  }
  n++;
}