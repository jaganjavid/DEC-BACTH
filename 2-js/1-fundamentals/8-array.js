
const numbers = [2,43,45,23,76,35,78,3,34,98];


// console.log(numbers);

let val;

// Get the array length

val = numbers.length;

// Check if it is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[3];

// Get the last index
val = numbers[numbers.length - 1];

// Change into array index value
val = numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(999); // if array match is return the index No if not -1

// Mutating array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off from the end
// numbers.pop();
// numbers.pop();

// Take off from the front
// numbers.shift();
// numbers.shift();

// console.log(numbers);

const fruits = ["Apple", "Orange", "kiwi", "Lemon"];

// Splice ===> remove and add

// to remove
// fruits.splice(1,2);

// to add
fruits.splice(1,2,"Mango");

// console.log(fruits);

// Reverse the array


val = numbers.reverse();

console.log(val);


function customIndexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }else {
            return -1;
        }
    }
}

const arr = [10, 20, 30, 40, 50];

console.log(customIndexOf(arr, 20));