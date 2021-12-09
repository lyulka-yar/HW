// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//
// elements.addEventListener("mousedown", function (ev) {
//     ev.preventDefault();
//     console.log(ev.target.localName+" " + "- attribute");
//     console.log("----------");
//     console.log(ev.target.className+" " + "- classes");
//     console.log(ev.target.id+ " " + "- id");
//     console.log("----------");
//     console.log(ev.target.offsetHeight+" " + "px - height");
//     console.log(ev.target.offsetWidth+" " + "px - width");
// });

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// elements.addEventListener("mousedown", function (ev) {
//     let popUpDiv = document.createElement("div");
//     ev.preventDefault();
//
//     let popUpTitle = document.createElement("h4");
//     let elemClass = document.createElement("p");
//     let elemId = document.createElement("p");
//     let elemSize = document.createElement("span");
//
//     popUpTitle.innerText=`${ev.target.nodeName} - attribute name`;
//     elemClass.innerText=`${ev.target.className} - classes name`;
//     elemId.innerText=`${ev.target.id} - id`;
//     elemSize.innerText=`heigth : ${ev.target.offsetHeight}px - width : ${ev.target.offsetWidth}px`;
//
//     popUpDiv.classList.add("popUpDiv");
//     popUpTitle.classList.add("popUpTitle");
//     elemId.classList.add("elemId");
//     elemSize.classList.add("elemSize");
//     ev.target.after(popUpDiv);
//     popUpDiv.append(popUpTitle, elemClass, elemId, elemSize);
// });


//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
//
// let statusInput = document.getElementById('status');
// let ageInput = document.getElementById('age');
// let cityInput = document.getElementById('city');
// let content = document.getElementById("content");
// let filter = document.getElementById("filter");
// let newArray = [];
//
//
// filter.onclick = function () {
//     // let newArray = JSON.parse(JSON.stringify(usersWithAddress)); //
//     if (statusInput.checked) newArray = newArray.filter(user => !user.status);
//     if (ageInput.checked) newArray = newArray.filter(user => user.age >= 29);
//     if (cityInput.checked) newArray = newArray.filter(user => user.address.city === 'Kyiv');
//
//     content.innerHTML = '';
//     content.appendChild(filterUsers(newArray));
// }
//
// function filterUsers(array) {
//     const wrap = document.createElement('div');
//
//     array.forEach(user => {
//         newArray.push(user);
//
//         const p = document.createElement('p');
//         p.innerHTML =
//             `<hr>
//          Ім'я: <b>${user.name}</b>
//          вік:  <b>${user.age}</b><br>
//          місто: <b>${user.address.city}</b><br>
//          статус: <b>${user.status}</b>`;
//
//         wrap.appendChild(p);
//     });
//     return wrap;
// }
// content.appendChild(filterUsers(usersWithAddress));


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let pictures = [
//     {
//         id: 1,
//         pic_url: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg'
//     },
//     {
//         id: 2,
//         pic_url: 'https://cdn.pixabay.com/photo/2015/04/07/03/44/fox-710454_960_720.jpg'
//     },
//     {
//         id: 3,
//         pic_url: 'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_960_720.jpg'
//     },
//     {
//         id: 4,
//         pic_url: 'https://cdn.pixabay.com/photo/2019/08/11/12/47/raccoons-4398911_960_720.jpg'
//     },
//     {
//         id: 5,
//         pic_url: 'https://cdn.pixabay.com/photo/2021/11/27/02/46/meerkat-6827075_960_720.jpg'
//     },
//     {
//         id: 6,
//         pic_url: 'https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_960_720.jpg'
//     },
//     {
//         id: 7,
//         pic_url: 'https://cdn.pixabay.com/photo/2019/08/21/16/03/panda-4421395_960_720.jpg'
//     },
//     {
//         id: 8,
//         pic_url: 'https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_960_720.jpg'
//     },
//     {
//         id: 9,
//         pic_url: 'https://cdn.pixabay.com/photo/2016/11/23/01/15/red-panda-1851650_960_720.jpg'
//     },
//     {
//         id: 10,
//         pic_url: 'https://cdn.pixabay.com/photo/2021/09/18/16/31/squirel-6635578_960_720.jpg'
//     },
//     {
//         id: 11,
//         pic_url: 'https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg'
//     },
//     {
//         id: 12,
//         pic_url: 'https://cdn.pixabay.com/photo/2013/11/15/18/14/grizzlies-210996_960_720.jpg'
//     }
// ];
//
// let content = document.getElementById("content");
// let slider = document.createElement("slider");
// let left = document.createElement("span");
// let right = document.createElement("span");
// let img = document.createElement("img");
//
//
// left.setAttribute("id", "left");
// right.setAttribute("id", "right");
// slider.classList.add('sliderWrap');
//
// content.append(slider);
// slider.append(left, img, right);
//
// // 0 1 2 3 4 5 6 7 8 9 10 11
// let position = 0;
//
// img.src = pictures[position].pic_url;
// left.onclick = () => {
//     position - 1 < 0
//         ? position = pictures.length - 1
//         : position = position - 1
//     img.src = pictures[position].pic_url;
// }
// right.onclick = () => {
//     position + 1 > pictures.length - 1
//         ? position = 0
//         : position = position + 1
//     img.src = pictures[position].pic_url;
// }
//

