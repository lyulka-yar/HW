/* Взяти файл template_2.html та працювати в ньому */
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let header = document.getElementById('main_header');
// header.className = "title";
// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName("ul");
// ul[0].style.width = "200px";
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName("linkList");
// for (let i = 0; i < linkList.length; i++) {
//     linkList[i].style.width = "50%";
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let listItem = document.getElementsByClassName("listElement2");
// console.log(listItem[0].textContent);
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//     const liElement = li[i];
//     liElement.style.backgroundColor = "grey";
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let alink = document.getElementsByTagName("a");
// for (let i = 0; i < alink.length; i++) {
//     alink[i].className="anchor";
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let anchors = document.getElementsByTagName("a");
// for (let i = 0; i < anchors.length; i++) {
//     const anchor = anchors[i];
//     if (anchor.textContent === "link3") {
//        anchor.style.fontSize = "40px";
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let anchors2 = document.getElementsByTagName("a");
// for (let i = 0; i < anchors2.length; i++) {
//     let link = anchors2[i];
//     link.className = `element_${link.textContent}`;
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let titles = document.getElementsByClassName("sub-header");
// for (const title of titles) {
//     title.style.backgroundColor = prompt("enter any color");
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName("sub-header");
// for (const item of subHeader) {
//     if (item.textContent === "content 2 segment") {
//     item.style.color = prompt("enter any color:");
//     };
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName("content_1");
// for (const item of content1) {
//     item.textContent = prompt("enter anything");
// }
// l) отримати елементи p та змінити їм padding на 20px
// let tagP = document.getElementsByTagName("p");
// for (const item of tagP) {
//     item.style.padding = "20px";
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2 = document.getElementsByClassName("text2");
// text2[0].textContent = "sep-2020";