
// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to value

if(id == "100"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Not Equal to value

if(id != "101"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Equal to value and type

if(id === 100){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}


// Not Equal to value and type

if(id !== "101"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// Test if undefined

let greet = "Vanakam";

if(typeof greet === "undefined"){
    console.log(`I dont have a value (${greet})`);
} else {
    console.log(`Yes i have a value (${greet})`);
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

if(100 <= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT")
}

// else if

const color = "blue";

if(color === "red"){
    console.log("color is red")
} else if(color === "blue"){
    console.log("color is blue")
} else {
    console.log("I dont know the color");
}

// Logical operator

// AND - && check both the value

const name = "Javid";
const age = 66;

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teen`)
} else {
    console.log(`${name} is a adult`)
}

// Or - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`)
}else {
    console.log(`${name} can run the race`)
}

// Ternary operator

console.log(100 === 101 ? "CORRECT" : "INCORRECT");