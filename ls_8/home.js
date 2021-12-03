
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = "New text here- hello";
// -- замініть текст параграфа з id 'rules' на будь-який інший
content.innerText = "Hello, it`s me your love - procrastination";
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let tags = document.querySelectorAll("div,ul,li,p");
for (const tag of tags) {
    tag.style.backgroundColor = "red";
    tag.style.color = "blue";
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementById('rules').classList;
console.log(classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName("fc_rules");

for (const item of fcRules) {
    item.style.color = "red";
}



