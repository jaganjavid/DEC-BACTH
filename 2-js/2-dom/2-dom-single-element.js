

// document.getElementById()

// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// console.log(taskTitle);

// Change Style

// console.log(taskTitle.style);
taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "20px";

// Change Content
taskTitle.innerText = "Hello Javid";
taskTitle.innerHTML = "<span>Hello Javid</span>";

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".collection-item"));
// console.log(document.querySelector("li"));
