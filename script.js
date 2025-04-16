
// Задание 1

{
  const numbers = [1, 5, 4, 10, 0, 3];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
      break
    }
  }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3] .Найдите индекс значения 4 в этом массиве.

{
  const numbers = [1, 5, 4, 10, 0, 3]; 

    console.log(numbers.indexOf(4));  
  
  }


  


// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20]. 
// С помощью метода join выведите элементы массива через пробел(пустую строку ' ').

{
  const numbers = [1, 3, 5, 10, 20];
  
 const numberString = numbers.join(' ');
  console.log(numberString);

  }


// // Задание 4
// // С помощью вложенных циклов создайте многомерный массив вида:[[1, 1, 1], [1, 1, 1], [1, 1, 1]].
{
  let arr = []
  for (let index = 0; index < 3; index++) {
    arr[index] = [];
    for (let i = 0; i < 3; i++) {
      arr[index].push(1);
      
    }
  }
  console.log(arr);
}


// Задание 5
// Дан массив:[1, 1, 1]. 
// Добавьте в конец массива значения 2, 2, 2.

{
  const numbers = [1, 1, 1];
  numbers.push(2, 2, 2);
  console.log(numbers); 
  
}



// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива.Затем выведите массив.

{
  const arr = [9, 8, 7, 'a', 6, 5]
  arr.sort();
  arr.pop('a')
  console.log(arr);
}

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].

// Попросите пользователя угадать число с помощью метода prompt.Если значение, которое ввел пользователь, есть в массиве,
// выведите в alert «Угадал», в противном случае — «Не угадал».

{
  const arr = [9, 8, 7, 6, 5]
  let guess = prompt('Угадай число');
  if (arr. icludes(guess)) {
    alert('Угадал!');
    
  } else {
    alert('Не угадал');
    
  }

  
}


// Задание 8
// Дана строка:'abcdef'. Выведите в консоль 'fedcba'.Для этого задания вам пригодится метод reverse().
// Он располагает элементы массива в порядке, обратном исходному.

{
  let str = 'abcdef';
  str = str.split('');
  console.log(str);
  str.reverse();
  console.log(str);
  str = str.join('');
  console.log(str);
}



// Задание 9
// Дан массив:[[1, 2, 3],[4, 5, 6]]
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

{
  const arr = [[1, 2, 3], [4, 5, 6]]
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  
  }
  console.log(newArr);
}

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса:i + 1.
// Обратите внимание, что у последнего элемента нет следующего.
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      console.log(arr[i] + arr[i + 1]);
    }
    
  }
}



// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
{
  function square(arr) {
    return arr.map(item => item ** 2);
  }
  console.log(square([1, 2, 3]));
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

{
  function getLength(arr) {
    return arr.map(item => item.length);
  }
  console.log(getLength(['welcome', 'home']));
}
// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.
{
  function negativeNumber(array) {
    return array.filter(item => item < 0);
  }
  console.log(negativeNumber([-4, 4, 3, -22, 55]));
}

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random()в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

{
  function randomNumber() {
    return Math.floor(Math.random() * 10);
  }
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(randomNumber()); 
  }
  console.log(arr);

  const evenArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    }
  }
  console.log(evenArr);
}

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random()
// в диапазоне от 1 до 10.Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

{
  function randomNumber() {
    return Math.floor(Math.random() * 10);
  }
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(randomNumber()); 
  }
  console.log(arr);

  console.log(arr.reduce((a, b) => a + b) / arr.length);
}