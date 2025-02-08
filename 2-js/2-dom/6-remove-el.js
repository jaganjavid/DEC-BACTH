

// Remove Element

const list = document.querySelector("li");

// list.remove();

const lists = document.querySelectorAll("li");

// lists.forEach(function(el){
//     el.remove();
// })

// Class && Attr

const firstli = document.querySelector("li:first-child");

const link = firstli.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST

val.add("Jagan");

val.forEach(function(cls){
    console.log(cls);
})

val.remove("test");

val.replace("Jagan", "Javid");

console.log(val);