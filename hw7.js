// Задание 1
// Преобразовать строку 'js' в верхний регистр.

const str = "js";
console.log(str.toUpperCase());

// Задание 2
// Создать функцию, которая принимает массив строк и строку.Функция должна вернуть новый массив, содержащий только те
// элементы первого массива, которые начинаются со второй строки.Регистр символов не влияет на результат.
// ['cow', 'sheep', 'horse', 'cat'], 'c'
function stringFilter(array, string) {
    console.log(array);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase().startsWith(string.toLowerCase())) {
      result.push(array[i]);
    }
  }
    return result;
}
console.log(stringFilter(['cow', 'sheep', 'horse', 'cat'], 'C'));


//Задание 3
// Округлить число 32.58884:

const number = 32.58884
console.log(Math.ceil(number)); // До большего целого.
console.log(Math.floor(number)); // До меньшего целого.
console.log(Math.round(number)); // До ближайшего целого.

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getNumber() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
}
getNumber()

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
// Длина массива должна быть в два раза меньше переданного числа.

function getNumberArray(number) {
    const result = [];
    for (let i = 0; i < number / 2; i++) {
        const randomNumber = Math.floor(Math.random() * number);
        result.push(randomNumber);  
    }
    return result;
      }
 console.log(getNumberArray(6));
    

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

// Функция принимает два целых числа и возвращает случайное число в этом диапазоне с использованием
// Math.random(), Math.floor() или Math.ceil()

function getRandomInt(min, max) {
  let arr = []
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

console.log(getRandomInt(15, 18));

// Задание 8
// Вывести в консоль текущую дату.
{
  const currentDate = new Date("April 14, 2025");
  console.log(currentDate);
}


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
{
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 73);
  console.log(currentDate);
  
}

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:

// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const dayOfWeek = days[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `
  
  Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}
  Время: ${hours}: ${minutes}: ${seconds}`

}
console.log(formatDate(new Date()));
