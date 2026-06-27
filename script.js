// إنشاء عنصر nav
const nav = document.createElement("nav");

// إنشاء ul
const ul = document.createElement("ul");

// عناصر القائمة
const menu = [
    "Home",
    "About",
    "Services",
    "Contact"
];

// إنشاء li لكل عنصر
menu.forEach(function(item){

    const li = document.createElement("li");

    li.textContent = item;

    ul.appendChild(li);

});

// إضافة ul داخل nav
nav.appendChild(ul);

// إضافة nav داخل الصفحة
document.getElementById("menu").appendChild(nav);
// DOM Task

const text = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    text.textContent = "Welcome to JavaScript DOM";
    text.style.color = "red";
    text.style.fontSize = "30px";
});