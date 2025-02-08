
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


const person1 = new Person("Jagan", "Javid");

// Person.prototype.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }

person1.__proto__.__proto__.getFullName = function(){
    return this.firstName + " " + this.lastName;
};

console.log(person1);

console.log(person1.getFullName());

const arr1 = [1,2,3];

console.log(arr1);


