// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//     (в першу, другу, третю или четверту частину години).
//
// let time = 59;
//
// if (time <=15 && time >= 0) {
//     document.write('first');
// } else if (time <= 30 && time > 15) {
//     document.write('second');
// } else if (time <= 45 && time > 30) {
//     document.write('third');
// } else if (time <= 59 && time > 45) {
//     document.write('forth')
// } else {
//     alert("error")
// }

// - У змінній day дано якесь число від 1 до 31.
//Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//(у першу, другу чи третю).
//
// let day = Math.round(Math.random()*31);
//
// if (day >= 0 && day <= 10) {
//     document.write('Число потрапляє до 1-ї декади');
// } else if (day > 10 && day <= 20) {
//     document.write('Число потрапляє до 2-ї декади');
// } else if (day > 20 && day <= 31) {
//     document.write('Число потрапляє до 3-ї декади');
// } else {
//     alert('error')
// }

// У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = !!!Math.round(Math.random());
//
// if (!test) {
//    
//     console.log('вірно');
//    
// } else {
//    
//     console.log('неправильно');
// }
// console.log(test);
//
// let test = !(true) ? console.log('неправильно') : console.log('вірно');
//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = 1;
// if (a != 0) {
//     console.log('вірно');
// } else {
//     console.log('невірно')
// }
//
//let a = !0 ? console.log("вірно") : console.log("не вірно"); /*Чи вірний такий запис????*/

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let currentDay = 4;
// switch (currentDay) {
//     case (1) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Погодувати Єнота;</li>
//                         <li>Придбати продукти на тиждень;</li>
//                         <li>Зайнятися спортом;</li>
//                         <li>Прочитати книжку;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (2) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Причесатися;</li>
//                         <li>Файно провести день в навчанні;</li>
//                         <li>Зайнятися йогою;</li>
//                         <li>Прочитати книжку;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (3) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Сходити до байсейну;</li>
//                         <li>Пробігти 10км;</li>
//                         <li>Відпочити на природі;</li>
//                         <li>Прочитати книжку;</li>
//                         <li>Переглянути найближчі плани;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (4) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Провідати батьків;</li>
//                         <li>Пробігти 10км;</li>
//                         <li>Спорт;</li>
//                         <li>Заплатити за комунальні;</li>
//                         <li>Переглянути фільм;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (5) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Відремонтувати полицю в шафі;</li>
//                         <li>Приготувати їжу;</li>
//                         <li>Спорт;</li>
//                         <li>Провести новий інтернет;</li>
//                         <li>Перечитати книжку;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (6) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Перечитати книжку;</li>
//                         <li>Вихідні - роби що завгодно;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     case (7) :
//         document.write(`
//                         <div>
//                         <ul>
//                         <li>Перечитати книжку;</li>
//                         <li>Вихідні - роби що завгодно;</li>
//                         </ul>
//                         <\div>`);
//         break;
//     default : document.write(`<h1>Розвивай свій мозок весь свій вільний час</h1>`);
// } 


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let year = (Math.floor(Math.random()*2500)+1500)+Math.round(Math.random()*50)+1;
//
// if (year % 4 && year % 100) {
//     console.log('high YEAR');
// } else {
//     console.log('low YEAR');
// }
// console.log('+++++++++++++++++++++++++')
// console.log(year)
// console.log('+++++++++++++++++++++++++')


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
//
// let officalName = prompt("Яка «офіційна» назва JavaScript?");
//
// if (officalName === "ECMAScript") {
//     alert("Правильно!");
// } else  {
//     alert('Не знаєте? - ECMAScript!');
// };

/*CLASS WORK*/

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let value_1 = +prompt("enter MinValue");
// let value_2 = +prompt("enter MaxValue");
//
// if (value_1 === value_2) {
//
//     console.log(`Числа рівні: ${value_1} \| ${value_2}`);
//
// } else if (value_2 > value_1 && value_1 !== value_2) {
//
//     console.log(`Максимальне значення : ${value_2} > ${value_1}`);
//
// } else if (value_1 > value_2 && value_2 !== value_1) {
//
//     console.log(`Максимальне значення : ${value_1} > ${value_2}`);
//
// };

//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// let numberOfFlat = +prompt('номер квартири');
//
// if (numberOfFlat <= 20 && numberOfFlat >= 1) {
//     console.log('1-й підїзд')
// } else if (numberOfFlat > 20 && numberOfFlat <= 48) {
//     console.log('2-й підїзд')
// } else if (numberOfFlat > 48 && numberOfFlat <= 90) {
//     console.log('3-й підїзд')
// } else {
//     console.log("Ви загубились!")
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = +prompt('enter your number');
//
// if (number === 10) {
//     console.log("ВІРНО");
// } else if (number !== 10) {
//     console.log("НЕВІРНО");
// };

