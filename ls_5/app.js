/*HOMEWORK*/

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangle = (a, b) => {
//     let s = a * b;
//     return s;
// };
// rectangle(5, 15);

// - створити функцію яка обчислює та повертає площу кола
// let circle = (r) => {
//     let s = Math.PI * Math.pow(r, 2);
//     return s;
// };
// circle(14);

// - створити функцію яка обчислює та повертає площу циліндру

// let cilinder = (r, h) => {
//     let s = 2 * Math.PI * r * (h + r);
//     return s;
// }
// cilinder(15,35);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1, 5, 12, 521, 45, 51, 77, 'hello', true];
// let element = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//     }
//     return arr;
// }
// element(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let printF = text => document.write(`<p>${text}</p>`);
//
// printF('hello my little deer');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (text) => {
// document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<p>`);
//         document.write(text);
//         document.write(`</p>`);
//     }
// document.write(`</ul>`);
// }
// list(`Hello i am list`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list2 = (text,number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>`);
//         document.write(text);
//         document.write(`</li>`);
//     }
//     document.write(`</ul>`);
// }
// list2('Hello i am list with 3 inner li',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1, 5, 12, 521, "45", 51, 77, "hello", true];
//
// let listMix = (array) => {
//     for (const item of array) {
//         document.write(`<ul>`);
//         document.write(`<li>`);
//         document.write(item);
//         document.write(`</li>`);
//         document.write(`</ul>`);
//     }
// }
// listMix(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let persons = [{id: 1, name: "Олег", age: 12}, {id: 1, name: "Олександра", age: 77}, {
//     id: 3,
//     name: "Галина",
//     age: 21
// }, {id: 4, name: "Параска", age: 43}];
//
// let incubator = (array) => {
//     for (const person of array) {
//         document.write(`<div>`);
//         for (const key in person) {
//             document.write(`<p>${key} : ${person[key]}</p>`);
//         }
//         document.write(`</div>`);
//         document.write(`<hr>`);
//     }
// }
// incubator(persons);

/*CLASSWORK*/

// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minValue = (a, b, c) => {
//     let min = 0;
//     if (a < b && a < c) {
//         min = a;
//         document.write(`minValue is: ${a} <br> for compare: ${b} - ${c}`);
//     } else if (b < a && b < c) {
//         min = b;
//         document.write(`minValue is: ${b} <br> for compare: ${a} - ${c}`);
//     } else if (c < a && c < b) {
//         min =c;
//         document.write(`minValue is: ${c} <br> for compare: ${a} - ${b}`);
//     } else {"error"}
//     return min;
// }
// minValue(13, 1, 222);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let minValue = (a, b, c) => {
//     let max = 0;
//     if (a > b && a > c) {
//         max = a;
//         document.write(`maxValue is: ${a} <br> for compare: ${b} - ${c}`);
//     } else if (b > a && b > c) {
//         max = b;
//         document.write(`maxValue is: ${b} <br> for compare: ${a} - ${c}`);
//     } else if (c > a && c > b) {
//         max =c;
//         document.write(`maxValue is: ${c} <br> for compare: ${a} - ${b}`);
//     } else {"error"}
//     return max;
// }
// minValue(13, 1, 222);

// - створити функцію яка повертає найбільше число з масиву

let numberOfArray = [12, 241, 5, 34564, 7, 324, 121];
//
// let max = (array) => {
//     let max = 0;
//     for (const number of array) {
//         if (number > max) {max = number;};
//     }
//         console.log(max);
//     return max;
// }
// max(numberOfArray);

// - створити функцію яка повертає найменьше число з масиву

// let min = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     console.log(min)
//     return min;
// }
// min(numberOfArray);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sum = (array) => {
//     let total = 0;
//     for (const number of array) {
//         total += number;
//     }
//     
//     return console.log(total);
// }
// sum(numberOfArray);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sum = (array) => {
//     let total = 0;
//     for (const number of array) {
//         total += number;
//     }
//     return console.log(total/array.length);
// }
// sum(numberOfArray);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let chaos = (array) => {
//     let max = array[0];
//     let min = array[0];
//     for (const number of array) {
//         if (number > max) {
//             max = number;
//         } else if (number < min) {
//             min = number;
//         }
//     }
//     console.log(`this is log of max number: ${max}`);
//     return min;
// }
//
// chaos(numberOfArray);


// - створити функцію яка заповнює масив рандомними числами
//
// let randomNumber = (array,cicles) => {
//     for (let i = 0; i < cicles ; i++) {
//         array[i] = (Math.round(Math.random()*cicles*(array.length)/2.5))*2-1;
//     }
//     console.log(array);
// }
// randomNumber([],50);


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomArraysNumber = (number) => {
//     let emptyArray = [];
//
//     for (let i = 0; i < number; i++) {
//         emptyArray.push(Math.round(Math.random()*100));
//     }
//     console.log(emptyArray);
//     return emptyArray;
// }
// randomArraysNumber(55);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let randomArrayNumber = (limit) => {
//     let newArray = [];
//     for (let i = 0; i < limit; i++) {
//         newArray.push(Math.round(Math.random() * (limit - 1) + 1));
//     }
//     console.log(newArray);
//     return newArray;
// }
// randomArrayNumber(100);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverse = (array) => {
//     let empty = [];
//     for (let i = array.length-1; i >= 0; i--) {
//         empty.push(array[i]);
//     }
//     console.log(empty);
//     return empty;
// }

// reverse([1,2,3,4,5,6,7,8,9,10]);

/*ADDITIONAL*/

// - Дано натуральное число n. Выведите все числа от 1 до n.

// let number = (n) => {
//     let num = [];
//     for (let i = 0; i < n; i++) {
//         num.push(i+1);
//     }
//     console.log(num)
//     return num;
// }
// number(43);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let filterOfNum = (a,b) => {
//     if (a < b) {
//         console.log(`b: ${b} a: ${a}`);
//     } else {
//         console.log(`a: ${a} b: ${b}`);
//     };
// }
// filterOfNum(154,594)

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let numbers = [9, 8, 0, 4];
// let changer = (array, num) => {
//     let accum = 0;
//     if (num < array.length-1) {
//         accum = array[num + 1];
//         array[num + 1] = array[num];
//         array[num] = accum;
//     } else {
//         console.log('error')
//     }
// console.log(numbers)
//     return array;
// }
// console.log('----------');
//
// changer(numbers, 2);

// - Сворити функцію яка буде переносити елементи зі значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

/*
let separator = arr => {
let all = [];
let zero =[];
let natural = [];
    for (const number of arr) {
        if (number === 0) {
        zero.push(number);
        } else {
            natural.push(number);
        }
    }
    all.push(...natural, ...zero);
    console.log(all);
    return all;
}

separator([1,0,6,0,3]);
*/
