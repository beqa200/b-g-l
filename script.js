const item = [...document.querySelectorAll(".item")];
const nav = [...document.querySelectorAll(".nav-list")];
console.log(nav);

const foo = item.filter((ele, index) => ele[index] == "UI/UX");
console.log(foo);
