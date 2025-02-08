

// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();

// Arrow function

// const sayHello = () => {
//     console.log("hello");
// }

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// One line return

// const sayHello = () => "Hello";

// One line object

// const sayHello = () => ({msg:"Hello"})

// Single params doent not need a parentheses

// const sayHello = name => `Hello ${name}`;

// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;


// console.log(sayHello("Jagan", "Javid"));

const users = ["Jagan", "Javid", "Akash", "Arun", "Kavin"];

// users.forEach(function(user){
//     console.log(user);
// })

users.forEach((user, index) => {
  console.log(`${user} - ${index}`);
})

const namesLength = users.map(user => {
    return user.length
});

console.log(namesLength);