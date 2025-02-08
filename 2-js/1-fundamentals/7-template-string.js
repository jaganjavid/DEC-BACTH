

const name = "Javid";
const age = 27;
const job = "Web Dev";
const city = "Chennai";


let html;

// without template strings

html = "My name is" + " " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " + "im from" + " " + city;


// with template strings

html = `My name is ${name} im ${age} my job is ${job} im from ${city}`;

console.log(html);