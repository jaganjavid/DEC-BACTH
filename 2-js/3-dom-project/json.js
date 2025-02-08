
const names = ["jagan", "javid", "kavin"];

console.log(names);

const convertArraytoString = JSON.stringify(names);

console.log(convertArraytoString);
console.log(typeof convertArraytoString);

const convertStringToArray = JSON.parse(convertArraytoString);

console.log(convertStringToArray);



// console.log(String(names));

// "DOMCONTENTLOADED"


