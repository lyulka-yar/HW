// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.getElementById("text");
//
// div.addEventListener('click', function () {
//  div.style.display='none';
// });

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
 let button = document.createElement("button");
document.body.appendChild(button);
button.innerText="click";
button.onclick = function (){
    button.style.visibility='hidden';
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let form = document.createElement("form");
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText="click";
document.body.appendChild(form);
form.appendChild(input);
form.appendChild(btn);






// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.