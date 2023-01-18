// 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
let getEvenOdd = () => {
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(`${i} - это ноль`);
      continue;
    }
    i % 2 === 0
      ? console.log(`${i} - четное число`)
      : console.log(`${i} - нечетное число`);
  }
};
getEvenOdd();
// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const myArray = [1, 2, 3, 4, 5, 6, 7];
myArray.splice(3, 2);
console.log(`мы вырезали 4 и 5 с массива : ${myArray}`);

// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const arrayRandom = [];
let getRandomArray = () => {
  for (let i = 0; i < 5; i++) {
    arrayRandom.push(Math.floor(Math.random() * 10));
  }
};
let getSumArray = (arrayRandom) => {
  let result = 0;
  for (let i = 0; i < arrayRandom.length; i++) {
    result += arrayRandom[i];
  }
  return result;
};
let getMinArray = (arrayRandom) => {
  let min = arrayRandom[0];
  for (let i = 1; i < arrayRandom.length; i++) {
    min > arrayRandom[i] ? (min = arrayRandom[i]) : min;
  }
  return min;
};
let getSortForThree = (getRandomArray) => {
  let resultPos = "";
  for (let i = 0; i < arrayRandom.length; i++) {
    arrayRandom[i] !== 3 ? resultPos : (resultPos += i + 1);
  }
  return resultPos !== ""
    ? `и тройка есть в массиве этом в позиции ${resultPos.split("")} !`
    : `и еще в массиве нету тройки!`;
};
getRandomArray();
console.log(`массив рандомный стал такой: [${arrayRandom}]
и сумма элементов в нем: ${getSumArray(arrayRandom)}
а еще скажу, что минимальный элемент в нем это: ${getMinArray(arrayRandom)}
${getSortForThree(arrayRandom)}`);

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:
let getMountOfStar = () => {
  let picChar = "";
  for (let i = 0; i < 20; i++) {
    console.log((picChar += "*"));
  }
};
getMountOfStar();
