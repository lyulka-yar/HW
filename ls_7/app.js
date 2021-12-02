/*HOMEWORK*/
//
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function UserConstructor(name, surname, email, phone, id) {
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.id = id;
// }
//
// let constructor = new UserConstructor("Oleg", "Pupkibn", "sobaka@wwq.com", "+38095734531", 3);
// console.log(constructor);
//
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new UserConstructor("Oleg", "Pupkibn", "sobaka@wwq.com", "+38095734531", 12),
//     new UserConstructor("Olegas", "Pupkibnwill", "sobaka@wwq.com", "+38095734531", 32),
//     new UserConstructor("Ola", "Pupkibna", "sobaka@wwq.com", "+38095734531", 33),
//     new UserConstructor("Oliii", "Loacvoa", "sobaka@wwq.com", "+38095734531", 42),
//     new UserConstructor("Olveragf", "Фардфыва", "sobaka@wwq.com", "+38095734531", 55),
//     new UserConstructor("Osasgha", "Vfajwj", "sobaka@wwq.com", "+38095734531", 66),
//     new UserConstructor("Orest", "Fkqjwkq", "sobaka@wwq.com", "+38095734531", 78),
//     new UserConstructor("Ohoprjk", "ALWEjkegf", "sobaka@wwq.com", "+38095734531", 82),
//     new UserConstructor("Ostrich", "Savajwj", "sobaka@wwq.com", "+38095734531", 91),
//     new UserConstructor("Kokonavt", "Olgqj", "sobaka@wwq.com", "+38095734531", 100)
// ];
// console.log(users)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// users.filter(value => {
//     if (value.id % 2 === 0) {
//         console.log(value)
//     };
// });
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => a.id - b.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(name, surname, email, phone, id, order = []) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//         this.id = id;
//     }
// }
//
// let client = new Client("Liza", "Olegovna", "ajajk@aklka.com", "+3809996543", 3, ["apple", "kiwi", "lemon", "orange", "phone"]);
// console.log(client);
//
// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 2, ["divka", "car", "lemon", "reduska", "corrector"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 4, ["divka", "car", "lemon"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 7, ["divka", "car", "lemon", "corrector"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 531, ["divka", "car"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 666, ["divka", "car", "lemon", "reduska", "corrector","carrot"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 12, ["divka"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 5, ["divka", "car", "lemon", "reduska", "corrector","water","owl"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 77, ["divka", "car", "lemon"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 44, ["divka", "car", "lemon", "reduska"]),
//     new Client("Petro", "Petrovich", "piter@gmail.com", "+3980453327171", 22, ["divka", "car", "lemon"]),
// ];
// console.log(clients);
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let clients_order = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients_order);

/*CLASSWORK*/
//
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function PlantOfCars(manufacturer, year, maxSpeed, engineVolume) {
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (maxSpeed) {
//          console.log(`їдемо з і швидкістю ${maxSpeed}км на годину`)
//     }
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== "function") {
//                 console.log(`${item}: ${this[item]}`);
//             };
//         }
//     }
//     this.increaceMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let plantOfCars = new PlantOfCars("Tesla", 2021, 60, 800);
// console.log(plantOfCars);
//
// let drive = plantOfCars.drive(80);
// let info = plantOfCars.info();
// let incMaxSpeed = plantOfCars.increaceMaxSpeed(50);
// let changeYear = plantOfCars.changeYear(2019);
// let addDriver = plantOfCars.addDriver("Marat");
// console.log("---------------")
// plantOfCars.info();
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class plantOfCars {
//
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//        
//         this.drive = function (maxSpeed) {
//             console.log(`Їдемо зі швидкістю ${maxSpeed}км на годину`)
//         }
//         this.info = function () {
//             for (const item in this) {
//                 if (item !== "function") {
//                     console.log(`${item} - ${this[item]}`)
//                 }
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed; 
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
// }
//  let car = new plantOfCars('Scorpio',"Ford",1987,145,121);
// console.log(car);
// car.increaseMaxSpeed(150);
// car.addDriver("Yaroslav");
// car.changeYear(2021);
// car.drive(75);
// console.log("================");
// console.log(car);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, leftShoe) {
//         this.name = name;
//         this.age = age;
//         this.leftShoe = leftShoe;
//     }
// }
//
// let girls = [
//     new Cinderella("Rose", 23, 33),
//     new Cinderella("Elisabeth", 21, 35),
//     new Cinderella("Karlitha", 28, 37),
//     new Cinderella("Karina", 44, 45),
//     new Cinderella("Karina", 39, 45),
//     new Cinderella("Santa-Luchia", 18, 34),
//     new Cinderella("Anna-Maria", 14, 28.5),
//     new Cinderella("Anna-Maria", 19, 25.5),
//     new Cinderella("Anna-Maria", 34, 26),
//     new Cinderella("Annabel", 74, 47)
// ];
//
// class Prince {
//     constructor(name, age, rightShoe) {
//         this.name = name;
//         this.age = age;
//         this.rightShoe = rightShoe;
//       /*FIRST EXAMPLE*/
// this.happyCouple = function (girls) {
//             let marriage = [];
//     for (const girl of girls) {
//         for (const shoe in girl) {
//             if (this.rightShoe === girl[shoe]) {
//                 marriage.push(girl,{name,age, rightShoe});
//             } else {
//                 console.log("maybe other time man")
//             };
//         }
//     }
//     console.log(marriage)
// }
//      /*SECOND EXAMPLE*/
// this.findQueen = function (girls) {
//     girls.find(value => {
//         if (value.leftShoe === this.rightShoe) {
//         let marriage = [];
//         marriage.push(value,{name,age,rightShoe});
//             for (const couple of marriage) {
//                 for (const person in couple) {
//                     document.write(`<div><b>${person}</b> : ${couple[person]}</div>`)
//                 }
//             }
//         };
//     });
// }
//      /*SECOND EXAMPLE*/
//     }
// }
// let prince = new Prince("Philip Bedrosovych", 18,25.5);
//
///*FIRST EXAMPLE CALL*/
// prince.happyCouple(girls);
//
///*SECOND EXAMPLE CALL*/
// prince.findQueen(girls);

/*ADDITIONAL*/
// Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//          suite: 'Apt. 556',
//          city: 'Gwenborough',
//          zipcode: '92998-3874',
//          geo: {
//          lat: '-37.3159',
//          lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
// class User {
//     constructor(id, username, email, name, phone, website) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.name = name;
//         this.phone = phone;
//         this.website = website;
//         this.address = function (street, suite, city, zipcode, geo, lat, lng) {
//             this.street = street;
//             this.suite = suite;
//             this.city = city;
//             this.zipcode = zipcode;
//             this.geo = function (lat, lng) {
//                 this.lat = lat;
//                 this.lng = lng;
//             };
//         }
//         this.company = function (name, catchPhrase, bs) {
//             this.name = name;
//             this.catchPhrase = catchPhrase;
//             this.bs = bs;
//         }
//     }
// }
//
// let user = new User(
//     1,
//     "SpiderMan",
//     "duka@urk.net",
//     "Piter Parker",
//     "+4423124123",
//     "https://spiderman.com");
//
// user.address("Washington str. 14",
//     132,
//     "New York",
//     10001,);
//
// user.geo(
//     -77.036389,
//     38.895);
// user.company(
//     "Google",
//     "Multi-layered client-server neural-net",
//     "harness real-time e-markets");
//
// console.log(user)

//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// - a,
// -div,
// -h1,
// -span,
// -input,
// -form,
// -option,
// -select



class Attribute {
    constructor(titleOfTag, action) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = function (titleOfAttrs,actionOfAttrs) {
            this.titleOfAttrs = titleOfAttrs;
            this.actionOfAttrs = actionOfAttrs;
           
        };
    }
}

let tagA = new Attribute("a", "Тег \<a> является одним из важных элементов HTML и предназначен для создания ссылок.");
tagA.attrs(
    "Активация ссылки с помощью комбинации клавиш. ",
    "Устанавливает координаты активной области.",
   );

let tagDiv = new Attribute(
    "div",
    "Элемент \<div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.");
    tagDiv.attrs("align","Задает выравнивание содержимого тега.");
let tagH1 = new Attribute(
    "h1",
    "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ");
tagDiv.attrs("align","Определяет выравнивание заголовка. ");
let tagHSpan = new Attribute(
    "span",
    "Тег \<span> предназначен для определения строчных элементов документа. ");
tagDiv.attrs("accesskey","Позволяет получить доступ к элементу с помощью заданного сочетания клавиш. ");
// console.log(tagA);
// console.log(tagDiv);
// console.log(tagH1);
// console.log(tagSpan);
// console.log(tagInput);
// console.log(tagForm);
// console.log(tagOption);
// console.log(tagSelect);



