// // Все робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let classNames = ["wrap", "collapse", "alpha", "beta"];
// let div = document.createElement("div");
//
// for (let i = 0; i < classNames.length; i++) {
//     div.classList.add(`${classNames[i]}`)
// }
// let wrap = document.getElementsByClassName("wrap");
//
// document.body.appendChild(div);
// let clone = div.cloneNode(true);
// document.body.appendChild(clone);
//
// wrap[0].style.backgroundColor="red";
// wrap[0].innerText="hello okten_sep-2020";




// // - Є масив:
//   let headerList =  ['Main','Products','About us','Contacts'];
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li 
// // та додає його до блоку .menu
// // Завдання робити через цикли.
// //
// let headerMenu = document.getElementsByClassName("menu");
//
// for (let i = 0; i < headerList.length; i++) {
//     const listElement = headerList[i];
//     let li = document.createElement("li");
//     headerMenu[0].appendChild(li);
//     li.innerHTML=`<a href="#">${listElement}</a>`
// }

// - Є масив
// let coursesAndDurationArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5},
//     {
//         title: 'Java Complex',
//         monthDuration: 6},
//     {
//         title: 'Python Complex',
//         monthDuration: 6},
//     {
//         title: 'QA Complex',
//         monthDuration: 4},
//     {
//         title: 'FullStack',
//         monthDuration: 7},
//     {
//         title: 'Frontend',
//         monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// //
// for (const element of coursesAndDurationArray) {
//
//         let div = document.createElement("div");
//         let span = document.createElement("span");
//
//         span.innerText=`${element.title} - ${element.monthDuration}`
//
//         document.body.appendChild(div);
//         div.appendChild(span);
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'> 
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const element of coursesAndDurationArray) {
//    
//         let div = document.createElement("div");
//         let h1 = document.createElement("h1");
//         let p = document.createElement("p");
//        
//         h1.classList.add("heading");
//         p.classList.add("description");
//        
//         h1.innerText=`${element.title}`;
//         p.innerText=`${element.monthDuration}`;
//        
//         document.body.appendChild(div);
//         div.append(h1,p);
// }

