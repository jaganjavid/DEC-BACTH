


// document.querySelector(".clear-tasks").addEventListener("click", function(){
//    alert(123);
// })

let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);

document.querySelector("#task-title").innerText = count;

// console.log(document.querySelector("#task-title").classList);

function onClick(){
    
    // count = count + 1;
    count += 1;

    // document.querySelector("#task-title").innerText = count;

    // document.querySelector("body").classList.add("add-color");
    document.querySelector("body").classList.toggle("add-color");
    
}

