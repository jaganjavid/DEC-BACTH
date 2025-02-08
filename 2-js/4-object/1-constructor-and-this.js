
function Person(firstName, lastName){
   this.firstName = firstName;
   this.lastName = lastName;
   this.getFullName = function(){
    return this.firstName + " " + this.lastName;
   }
}

const jagan = new Person("Jagan", "Javid");
const arun = new Person("Arun", "Kumar");

console.log(jagan);
console.log(jagan.getFullName());



console.log(arun);
console.log(arun.getFullName());


