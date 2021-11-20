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

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
//   x = [true, false, 12, "привет", [1,2,4], ()=>{}, null, BigInt, {}];
//
// for (const elem of x) {
//   if (typeof(elem) === "number") {
//       console.log(1);
//   } else if (typeof(elem) === "string") {
//         console.log(2);
//   } else if (typeof(elem) === "boolean") {
//       console.log(3);
//   } else if (typeof(elem) === "object" && elem !== null) {
//       console.log(4);
//  } else {
//      console.log("Невідомий тип данних");
//  }
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let max = 35;
// let min = -15;
//
// let temperture = Math.round(Math.random()*(max - min) + min);
//
//  if (temperture >= 10 && temperture <= 22) {
//     
//      console.log(`температура ${temperture}, ми йдемо ВЧИТИСЯ`);
//     
//  } else {
//      console.log(`температура ${temperture}, сидимо вдома і вчимося ОНЛАЙН`);
//  };


//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ...
//
// let randomGift = +prompt("Do you wanna play a GAME?");
//
//
// switch (randomGift) {
//    
//     case (1):
//         console.log("You WIN! --> Tesla Model Y Performance Send SMS to 122 -22 -22");;
//         break;
//     case (2):
//         console.log("Samsung S21 Pro Turba 64x 500 MegaPixel 100Tb SMS to 122 -22 -22");;
//         break;
//     case (3):
//         console.log("Norco bike 2021 CrosCountry grandTourismo CLS SMS to 122 -22 -22");;
//         break;
//     case (4):
//         console.log("Шкарпетки з Оленями");;
//         break;
//     case (5):
//         console.log("Кулька бажань");;
//         break;
//     default :
//         console.log("ля ти пацююююк.....");;
// };

/*ADDITIONAL*/

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     console.log("Цей масив великий та має 3 ібільше елементи");
// } else {
//     console.log("Цей масив має довжину менш аніж 3 елементи");
// }

//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше).
//     Перевірити, чи знаходиться перше число між двома іншими.
//

// let a = +prompt("a:");
// let b = +prompt("b:");
// let c = +prompt("c:");
//
//
// if (a < b && a < c) {
//     console.log(a);
//     console.log('-----------')
//     console.log(b);
//     console.log(c);
// } else if (b < a && a < c) {
//     console.log(b);
//     console.log('-----------')
//     console.log(a);
//     console.log(c);
// } else if (c < b && c < a) {
//     console.log(c);
//     console.log('-----------')
//     console.log(a);
//     console.log(b);
// } else {
//     console.log("ошибка")
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// 

// let a = +prompt("введіть число а:");
// let b = +prompt("введіть число b:");
//
// let result = (a + b < 4) ? console.log('Мало') : console.log('Багато');

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
// let randomNumber = +prompt("введіть число в діапазоні -100....100:");
//
// let result = (randomNumber < 0 && randomNumber >= -100) ?
//     console.log('негативне') : (randomNumber <= 100 && randomNumber > 0) ?
//          console.log('позитивне') : (randomNumber === 0) ?
//             console.log('нуль') : console.log('error');

