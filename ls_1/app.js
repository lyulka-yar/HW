/*
- Створити змінні. Присвоїти кожному з них значення:
'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
  Вивести кожну змінну за допомогою: console.log , alert, document.write
- Переприсвоїти кожній змінній з завдання значення на довільне.
  Вивести кожну змінну за допомогою: console.log , alert, document.write
*/
/*let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let f = 1;
let g = 10;
let h = -99;
let i = 123;
let j = 3.14;
let k = 2.7;
let l = 16;
let m = true;
let n = false;
//
// document.write(`${a} ${b} ${c} ${d}`)
// console.log(f,g,h,i,j,k,l,m,n);
/!*alert(m);
alert(n);*!/
//
//a = 321;
//b = 'pumpkin';
//c = 4.15;
//d = 'sherman';
//f = false;
//g = 33;
//h = '3';
//i = ' carol';
//j = a + g;
//k = 21 + b;
//l = f === h;
//m = d / 15 * 2;
//n = g % 2;
//
document.write(i);
// alert(m);
// alert(l)
document.write(n)
document.write(f)
console.log(g);
document.write(a + h)*/

/*
Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Ім`ям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/
/*
let firstName = 'Yaroslav';
let middleName = 'Liulka';
let lastName = 'Vadymovuch';
let person = `${middleName} ${firstName} ${lastName}`;
document.write(person + '</br>');

firstName = prompt("Введіть ваше ім'я");
middleName = prompt("Введіть ваше прізвище");
lastName = prompt("Введіть ваше по-батькові");
let age = prompt("Введіть ваш вік");

document.write(`Вітаю ${firstName} ${lastName}, тобі ${age} років`)*/

/*
- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/
//
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// let a = (5 < 6); //true
// let b = (5 > 6); //false
// let c = (5 === 6); //false
// let d = (5 === 6); //false
// let e = (10 === 10); //true
// let f = (10 == 10); //true
// let g = (10 < 10);//false
// let h = (10 !== 10);//false
// let i = (10 > 10 );//false
// let j = (123 === '123');//false
// let k = (123 == '123');//true
// console.log(a,b,c,d,e,f,g,h,i,j,k)

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?
//     и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // при сложении js превращает число в стрингу
// document.write(str - a + "<br/>"); // js пытается привести стрингу к числу
// document.write(str * "2" + "<br/>"); // js пытается привести стрингу к числу
// document.write(str / 2 + "<br/>"); // js пытается привести стрингу к числу


/*CLASSWORK*/

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let arrayOfNumbers = [123,53,124, 3.4,44,1,64,Math.random()*10,333,Math.floor(Math.random()*155)];
// let result = arrayOfNumbers[0]+arrayOfNumbers[1]+arrayOfNumbers[2]+arrayOfNumbers[3]+arrayOfNumbers[4]+arrayOfNumbers[5]+arrayOfNumbers[6]+arrayOfNumbers[7]+arrayOfNumbers[8]+arrayOfNumbers[9];
// console.log(Math.floor(result));

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
// let book = {
//     name: 'Harry Potter',
//     pagesCount: 654,
//     genre: 'fantastic'
// }
// console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//
// let newBook = {
//     name: 'Bloody rain of rabbits',
//     pagesCount: 133,
//     genre: 'horror',
//     authors: {
//         first: 'Piter Parker',
//         second: 'Elisabeth Swang',
//         third: 'Gebedaya Scroodge'
//     }
// }

// 4. Створити маcив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
// let bookStorage = [
//     book_1 = {
//         name: 'Harry Potter',
//         pageCount: 134,
//         genre: 'fantastic',
//         authors: {
//             first: 'dambldor griff',
//             second: 'hermiona promeert',
//             third: 'scramchez cooker'
//         }
//     },
//     book_2 = {
//         name: 'Black & Red',
//         pageCount: 321,
//         genre: 'melodrama',
//         authors: {
//             first: 'Alex Block',
//             second: 'Beatrissa le Strength',
//             third: 'Elisabeth Parkenson'
//         }
//     },
//     book_3 = {
//         name: 'Romeo and Juliette',
//         pageCount: 9999,
//         genre: 'melodrama and romantic',
//         authors: {
//             first: 'Willam Sheckspear',
//             second: 'Ded so dvora',
//             third: 'Best clibovskivsys'
//         }
//     }
// ];
//
// console.log(bookStorage[0])
// console.log(bookStorage[1])
// console.log(bookStorage[2])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let s = height * width;
// console.log(s + ' см^2');

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
//
// let heightC = 10;
// let dC = 4;
// const pi = 3.14159;
// let v = pi * dC * heightC;
// console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
//  let n = 3;
//  let m = 4;
//
//  let k = Math.sqrt(Math.pow(n ,2) + Math.pow(m, 2));
//
// console.log(k);


// Ваше завдання, зробити так, щоб файл відкривався без помилок .
//
// let a = 100;
// let b = 500;
// let c = "hello";
// let d = "okten";
// const x = 'constant value';
//
// console.log(a);
// c = 'new value';
// b = 'new value';
// d = 133;
// let result = 100 + x;
//
// console.log(result);
