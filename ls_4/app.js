/*HOME*/

// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareRect(a, b) {
//     let S = a * b;
//     return S;
// }
// console.log(squareRect(14,9));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(r) {
//     const pi = 3.14159;
//     let S = pi * Math.pow(r,2);
//     return S;
// }
//
// console.log(squareCircle(13));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function sCylinder(r, h) {
//     let pi = 3.14159;
//     let S = 2 * pi * r * (r + h);
//     return S;
// }
// console.log(sCylinder(5,15))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1, 43, 213, 65, 1111, 'hello', false, "okten"];
//
// function iterator(array) {
//     for (const item of array) {
//         console.log(item)
//     }
//     return item;
// }
//
// iterator(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function creator(text) {
//    return  document.write(`<p>${text}</p>`)
// }
// creator("Hello okten, i`m a function");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function markList(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`);
// }
// markList('hell world it`s me function');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function proList(a, text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < a; i++) {
//         document.write(`<li>${text}</li>`)
//     } document.write(`</ul>`);
// }
// proList(3, 'testing test of test');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let primitives = [12,"hello", false, "okten", true, "boom"];
//
// function printF(val) {
//     document.write(`<ul>`)
//     for (let i = 0; i < val.length; i++) {
//         document.write(`<li>${val[i]}</li>`)
//     } document.write(`<ul>`)
// }
// printF(primitives);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let people = [{id: 14, name: "Oleg", age: 22},{id: 17, name: "Sasha", age: 42},{id: 24, name: "Martin", age: 24},{id: 22, name: "piter", age: 82}];
//
// function incubator(meat) {
//     document.write(`<div>`);
//     for (const person of people) {
//         document.write(`<br>name: ${person.name} <br>- age: ${person.age} <br>-  user_id: ${person.id} <br>`)
//     }
//     document.write(`</div>`);
// }
// incubator(people)

/*CLASSWORK*/

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minValue(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     } else {
//         console.log("error");
//     }
// };
// minValue(2, 51, 33);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function minValue(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     } else {
//         console.log("error");
//     }
// };
// minValue(2, 51, 33);

// - створити функцію яка повертає найбільше число з масиву

let arrayOfNumbers = [3, 32, 124, 44, 2, 876, 1221, 999999];

// function maxNumber(array) {
//     let maxValue = array[0];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > maxValue) {
//              maxValue = element;
//         }
//     }   
//     return maxValue;
// }

// document.write(maxNumber(arrayOfNumbers));

// - створити функцію яка повертає найменьше число з масиву

// function minValue(array) {
//     let minValue = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element < minValue) {
//             minValue = element;
//         }
//     }
//     return minValue;
// }
// document.write(minValue(arrayOfNumbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrayOfNum = [1, 44, 12, 54, 76, 32];

//
// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     console.log(total);
// }
// sum(arrayOfNum);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     console.log(total/array.length)
// }
// average(arrayOfNum);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function filter(array) {
//     let max = array[0];
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         } else if (array[i] > max) {
//             max = array[i];
//         } 
//     }
//     console.log(max)
//     return min;
// }
//
// filter(arrayOfNum);

// - створити функцію яка заповнює масив рандомними числами

// let emptyArr = [];
//
// function randomGenerator(number) {
//     for (let i = 0; i <= 10; i++) {
//         emptyArr = Math.floor((Math.random() * (50 - 6)) + 6);
//         console.log(emptyArr)
//     }
// }
// randomGenerator(arrayOfNum);

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


/*ADDITIONAL*/

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]