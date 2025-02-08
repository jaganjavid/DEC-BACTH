
// (.) object are key and value pairs

const person = {

    // Property
    firstName:"Jagan",
    lastName:"Javid",
    age:27,
    email:"j@email.com",
    hadDinner:false,
    hobbies:["Music", "Sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    test: function(){
        return this;
    }
}


let val;

val = person;


// Get a specific key

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.state;
val = person.getFullName();
val = person.test();


console.log(val);
