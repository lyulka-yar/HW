// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
//
// dataNumber = [1, 54, 123, 523, 2, 65, 87, 888];
// dataString = ["first", "second", "third", "forth", "fifth"];
// dataMix = [1, "second", false, 4, "third", 33, true, "dog"];
//
// for (let i = 0; i < dataNumber.length; i++) {
// const dataElementNum = dataNumber[i];
//     console.log('__________')
//     console.log(dataElementNum);
// }
//
// for (let i = 0; i < dataString.length; i++) {
//     const dataElementStr = dataString[i];
//     console.log('__________')
//     console.log(dataElementStr)
// }
//
// for (let i = 0; i < dataMix.length; i++) {
//     const dataElementMix = dataMix[i];
//     console.log('__________')
//     console.log(dataElementMix)
// }


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//  fruits = ["apple", "pineapple", "orange","pamela","cherry","banana","blueberry","strawberry","melon","watermalon","kivi","peach","pitahaya","dragonfruit","carambol"];
//  empty = [];
//
// for (let i = 0; i < 15; i++) {
//    const newData = empty[i];
//     console.log(empty[i]=fruits[i])
//    empty.push(newData);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i = 0; i < fruits.length; i++) {
//    
//     document.write(`<div>${fruits[i]}</div>`);
//    
// }

// for (let i = 0; i < fruits.length; i++) {
//
//     document.write(`<div>${i} - ${fruits[i]}</div>`);
//
// }
// fruits = ["apple", "pineapple", "orange","pamela","cherry","banana","blueberry","strawberry","melon","watermalon","kiwi","peach","pitahaya","dragonfruit","carambol","grapefruit","grape","lemon","lychee","apricot"];
// let i = 0;
//
// while (i < fruits.length) {
//     document.write(`<h1>${fruits[i-1]}</h1>`);
//     i++;
// }
//
// while (i < fruits.length) {
//     document.write(`<h1>${i-1} ${fruits[i-1]}</h1>`);
//     i++;
// }


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// numbers = [1, 532, 5234, 21, 1, 87, 123];
// string = ["apple", "pineapple", "orange", "pamela", "cherry", "banana", "blueberry", "strawberry", "melon", "watermalon"];
// mix = ["apple", false, 15, 125, true, "orange", "pamela", 124, "cherry", false];
//
// /*NUMBERS*/
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// console.log("***************************************");
//
// /*STRINGS*/
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }
// console.log("***************************************");
//
// /*MIX*/
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);
// }
// console.log("***************************************");
//
// /*ONLY NUMBERS*/
// for (let i = 0; i < mix.length; i++) {
//   if (typeof mix[i] === "number") {
//       console.log(mix[i]);
//   }
// }
// console.log("***************************************");
// /*ONLY STRINGS*/
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "string") {
//         console.log(mix[i]);
//     }
// }
// console.log("***************************************");
//
// /*ONLY BOOLEAN*/
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "boolean") {
//         console.log(mix[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// emptyArray = [];
//
// mix = ["apple", false, 15, 125, true, "orange", "pamela", 124, "cherry", false];
//
// for (let i = 0; i < 10; i++) {
//
//     let data = emptyArray[i];
//
//     data = mix[i];
//    
//     emptyArray.push(data);
// }
// console.log(emptyArray)
//
/*10 - ітерацій крок - 1*/
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i}<br>  `);
// }
/*100 - ітерацій крок - 1*/
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i}<br>  `);
// }
/*100 - ітерацій крок - 2*/
// //
//         let arr = [];
// for (let i = 0; i < 300; i+=3) {
//         console.log(i);
//         document.write(`${i}<br>`);
//   arr.push(`${i}`);
// }
//     console.log(arr)

/*100 - ітерацій - парні*/

// for (let i = 0; i < 100; i++) {
//         if (i % 2 === 0) {
//                 console.log(i);
//         }
// }

/*100 - ітерацій - непарні*/
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та:
//     1. перебрати його циклом while
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
//
//  while (i < array.length) {
//      console.log(array[i]);
//      i++;
//  }

//     2. перебрати його циклом for

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;
//
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
//
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//         i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (item % 2 === 0) {
//         console.log(item);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (item % 2 !==0) {
//         console.log(item = "okten");
//     }
// }


// 8. вивести масив в зворотньому порядку.

//  


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = array.length;
//
//  while (i !== 0) {
//      i--;
//      console.log(array[i]);
//  }

// for (let i = array.length-1; i >= 0 ; i--) {
//     console.log(array[i], i )
// }

// let i = array.length;
//
// while (i > 0) {
//     i--;
//     if (i % 2 !==0) {
//         console.log(array[i]);
//     }
// }

// for (let i = array.length; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// let i = array.length;
// while (i > 0) {
//     i--;
//     if (i % 2 ===0){
//         console.log(array[i]);
//     }
// }

// for (let i = array.length-1; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0){
//         console.log(array[i]);
//     }
// }