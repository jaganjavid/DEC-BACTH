
// Two Phase

// 1 - Creation
// 2 - Excutation

// Function statement


function greet(firstName = "John", lastName = "Doe"){


    // Default value
    // if(typeof firstName === "undefined"){
    //     firstName = "John"
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe"
    // }

    console.log(`Hello ${firstName} ${lastName}`);
}

// greet("Jagan", "Javid");

// Function expression

// add();

// const add = function(x = 5){
//     console.log(x + 5);
// }

// add();
// add(10);

// An IIFE ( Immediately Invoked Function Expression )

(function(name){
   console.log(name)
}("Jagan"));
