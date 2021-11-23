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
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

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

// for (let i = array.length; i >= 0 ; i--) {
//     let item = array[i];
//     if(i % 2 === 0) {
//         console.log(item = "okten");
//     }

// }


/*ADDITIONAL*/
// let emptyArray = [];


// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


/*A*/
//  for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0) {
//         emptyArray.push(i);
//     }
// }
// console.log(emptyArray);

/*B*/
//   for (let i = 0; i < 100; i++) {
//      if(i % 2 !== 0) {
//          emptyArray.push(i);
//      }
//  }
//  console.log(emptyArray);

/*С*/

//   for (let i = 0; i < 20 ; i++) {
//          emptyArray.push(Math.round(Math.random()*20));
//  }
//  console.log(emptyArray);

/*D*/
// let max = 732;
// let min = 8;

//  for (let i = 0; i < 20 ; i++) {
//     emptyArray.push(Math.round(Math.random()*(max-min))+min);
// }
// console.log(emptyArray);


//2. Вивести за допомогою console.log кожен третій елемен

// let numbers = [1, 4, 42, 41, 5434, 40, 124, 634, 22, 563, 102, 213, 753, 23, 10015, 4151];

// for (let i = 2; i < numbers.length; i+=3) {
//     const item = numbers[i];
//         console.log(item);
// }
// console.log(numbers);


//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < numbers.length; i+=3) {
//     const item = numbers[i];
//         if(item % 2 === 0) {
//             console.log(item);
//         }
// }
// console.log(numbers);

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//     const item = numbers[i];
//     if(item % 2 === 0) {
//         newArr.push(item);
//     }
// }
// console.log(newArr);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  let example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

//  for (let i = 0; i < numbers.length; i++) {
//      const element = numbers[i];
//      if (element % 2 === 0) {
//          console.log(numbers[i-1]);
//     }
// }

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let total = 0;
// let middle = [100, 250, 50, 168, 120, 345, 188];
// for (let i = 0; i < middle.length; i++) {
//     total += middle[i];
// }
// console.log(Math.round(total/middle.length));


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let newEmptyArray = [];
// let compareValue = 0;
// for (let i = 0; i < 30; i++) {
//     let randomArrray = [];
//     let randomNumber = Math.floor((Math.random() * (2333 - 125)) + 125);
//     randomArrray[i] = randomNumber;
//     let multipli = newEmptyArray[i] = randomArrray[i] * 5;
//     compareValue = randomNumber;
//     console.log(compareValue, ":", multipli);
// }
// console.log(newEmptyArray);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let timerHour = 2;
// let timerMin = 59;
// let timerSec = 59;
// for (let hour = 0; hour < 3; hour++) {
//     let min = 0;
//     for (; min < 60; min++) {
//         let sec = 0;
//         for (; sec < 60; sec++) {
//             console.log(`0${hour}: ${min}:${sec}`);
//         }
//     }
// }

// let time = 2;
// for (let min = 0; min < 3; min++) {
//     let sec = 0;

//     for (; sec < 60; sec++) {
//         console.log(`0${min} min ${sec} sec`);
//         if (time === min) {
//             break;
//         }
//     }

// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let userWithAdress = [];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (city.user_id === user.id) {
//             user.address = city;
//         }
//     }
// }
// userWithAdress.push(usersWithId);
// console.log(userWithAdress);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let example = [1, 2, 3, 5, 7, 9, 56, 8, 67, 53];
//
// for (let i = 0; i < example.length; i++) {
//     if (example[i] % 2 === 0) {
//         console.log(example[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let empty = [];
// let i = 0;
//
// while(i<example.length) {
//     empty[i] = example[i];
//     i++;
// }
// console.log(empty)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let letter = ["a", "b", "c"];
// let word = "";

// for (let i = 0; i < letter.length; i++) {
// word+=letter[i]
// }
// console.log(word)

// let j = 0;
// while (j < letter.length) {
//     word+=letter[j];
//     j++;
// }
// console.log(word);

// for (const string of letter) {
//     word+=string;
// }
// console.log(word)