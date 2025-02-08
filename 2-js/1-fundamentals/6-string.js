

const firstName = "Jagan";
const lastName = "Javid";
const age = 27;


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
val += " Doe";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get the index of value 
val = firstName[0];
val = firstName[2];

// CharAT()
val = firstName.charAt(2);


// Slice

const fruit = "Orange";

val = fruit.slice(1, 4);

// console.log(fruit);

// Split

const tags = "Web Dev, App Dev, UI/UX";
const str = "Hello my name is jagan";

val = tags.split("");
val = tags.split(" ");
val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// Include
val = str.includes("name");


console.log(val);