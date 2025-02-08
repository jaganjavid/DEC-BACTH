

// Define a UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");

// Load all event listeners


loadAllEventListeners();

function loadAllEventListeners(){

    // DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks);
 
    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

    // Filter tasks event
    filter.addEventListener("input", filterTasks);    


}


function getTasks(){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(taskValue){
         // create element
         const li = document.createElement("li");

         // Add class
         li.className = "collection-item";
 
         // Create Inner Text
         li.innerText = taskValue; 
 
         // Create a new link element
         const link = document.createElement("a");
 
         // Add a class to link 
         link.className = "delete-item secondary-content";
 
         // Add a icon to link
         link.innerHTML = `<i class="fa fa-remove"></i>`;
 
         // Add link to li
         li.appendChild(link);
 
         // Add li to ul
         taskList.appendChild(li);
    })

    
}


// Add Task
function addTask(e){

    e.preventDefault();
   
    if(taskInput.value === ""){
        alert("Please enter a task");
    }else{
     
        // create element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Create Inner Text
        li.innerText = taskInput.value; 

        // Create a new link element
        const link = document.createElement("a");

        // Add a class to link 
        link.className = "delete-item secondary-content";

        // Add a icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add link to li
        li.appendChild(link);

        // Add li to ul
        taskList.appendChild(li);

        // Store in ls
        storeTaskInLocalStorage(taskInput.value);
     
        // Clear the input value
        taskInput.value = "";

    }

}

function storeTaskInLocalStorage(taskValue){
   
    let tasks;

    if(localStorage.getItem("tasks") === null){
        console.log("STEP-1")
        tasks = [];
    } else {
        console.log("STEP-2")
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
    }

    tasks.push(taskValue);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


function removeTask(e){

    if(e.target.parentElement.className === "delete-item secondary-content"){
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLs(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLs(taskElement){
  
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
       if(taskElement.innerText === task){
           tasks.splice(index, 1);
       }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));


}


function clearTask(){
    // taskList.innerHTML = "";

    // console.log(taskList.children);
    // const listItems = Array.from(taskList.children);

    // listItems.forEach(function(el){
    //    el.remove();
    // })

    const allLi = document.querySelectorAll("li");

    allLi.forEach(function(el){
       el.remove();
    })

    // const listItems = document.querySelectorAll(".collection-item");

    // if(listItems.length > 1){
    //     taskList.style.display = "block"
    // } else {
    //     taskList.style.display = "none"
    // }

    clearFromLs();

    
}

function clearFromLs(){
    localStorage.removeItem("tasks");
}

function filterTasks(e){

    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll(".collection-item").forEach(function(li){
      const item = li.innerText;

      console.log(item.toLowerCase().indexOf(text));

      if(item.toLowerCase().indexOf(text) !== -1){
          li.style.display = "block"
      }else {
          li.style.display = "none"
      }

    })

}
