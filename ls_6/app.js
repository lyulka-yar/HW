/*HOMEWORK*/

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (const string of arr) {
//     console.log(string.length);
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// for (const string of arr) {
//     console.log(string.toUpperCase())
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// let arr_high = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

// for (const string of arr_high) {
//     console.log(string.toLowerCase());
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
//
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
//
// let stringToArray = (string) => {
//     let arr = str.split(" ");
//  document.write(arr);
//     return arr;
// }
// let array = stringToArray(str);
// console.log(array);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let delete_characters = (str, length) => {
//     document.write(str.slice(0, length));
//     return str;
// }
// let deleteCharacters = delete_characters(str,7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let res = str.toUpperCase().replaceAll(" ","-");
//     console.log(res)
//     return res;
// }
//
// let result = insert_dash(str);

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let string = "hello world";
// let lowToUppercase = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
//  document.write(lowToUppercase(string));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let capitalize = (str) => {
//  return str.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1));
// }
// document.write(capitalize(string));


/*CLASSWORK*/

//
// - Дано список імен.
//     let n1 = 'Harry..Potter';
//     let n2 = 'Ron---Whisley';
//     let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let validator = (str) => {
//     return str.replace("..", " ").replace("---"," ").replace("__"," ");
// }
// let result = validator(n3);
// console.log(result);

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomNum = [];
// let randomizer = () => {
//     for (let i = 0; i < 100; i++) {
//         randomNum.push(Math.round(Math.random() * 100));
//     }
//     // console.log(randomNum)
//     return randomNum;
// };
// randomizer();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(randomNum.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// console.log(randomNum.filter(number => number % 2 === 0 && number !== 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let random = randomNum.map(number => number.toString());
// console.log(random);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let nums = [11, 21, 3];
//
// function sortNums(direction) {
//     nums.sort((a, b) => {
//         if (direction === "ascending") {
//             return a - b;
//         } else if (direction === "descending") {
//             return b - a;
//         } else {
//             console.log("error");
//         }
//     });
//     console.log(nums);
// }
//
// sortNums("descending");
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str, n) => {
//     let splited = [];
//     while (str.length) {
//         splited.push(str.substring(0,n))
//         str = str.slice(n);
//         str.length--;
//     }
//     console.log(splited);
//     return splited
// };
// document.write(cutString("наслаждение", 3));

