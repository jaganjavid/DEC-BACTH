

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION

// items.undefined.color = "blue";

// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";


// console.log(Array.isArray(items));

// for loop
// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// let lists = Array.from(items);

// lists.forEach(function(el){
//     el.style.color = "green"
// })

const listItems = document.querySelectorAll(".collection-item"); // Nodelist

listItems.forEach(function(el){
    el.style.backgroundColor = "green";
    el.style.color = "orange"
})