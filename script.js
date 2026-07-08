// إنشاء nav
const nav = document.createElement("nav");
nav.className = "bg-blue-500 p-4 rounded-lg";

// إنشاء ul
const ul = document.createElement("ul");
ul.className = "flex justify-center gap-8 text-white font-bold";

// عناصر القائمة
const menu = [
    "Home",
    "About",
    "Services",
    "Contact"
];

// إنشاء li لكل عنصر
menu.forEach(function(item) {

    const li = document.createElement("li");

    li.textContent = item;

    li.className =
        "cursor-pointer hover:text-yellow-300 transition";

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


// BOM Task
const alertBtn = document.getElementById("alertBtn");
const promptBtn = document.getElementById("promptBtn");
const confirmBtn = document.getElementById("confirmBtn");


// Alert
alertBtn.addEventListener("click", function () {
    alert("Welcome to JavaScript BOM");
});


// Prompt
promptBtn.addEventListener("click", function () {
    const name = prompt("Enter your name:");

    if (name) {
        alert("Welcome " + name);
    }
});


// Confirm
confirmBtn.addEventListener("click", function () {
    const result = confirm("Do you want to continue?");

    if (result) {
        alert("You clicked OK");
    } else {
        alert("You clicked Cancel");
    }
});


