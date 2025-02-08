
let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("li:last-child");


val = list;
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[2].nodeType;

// 1 - Element
// 3 - Text 
// 8 - Comment

// Get the children element nodes

val = list.children; // ***
val = list.children[0];
val = list.children[0].children[0];

// First Child
val = list.firstElementChild;

// Last Child
val = list.lastElementChild;

// Child Count
val = list.childElementCount;

// Get the parent element
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

val = listItem;

// val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

val = listItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);