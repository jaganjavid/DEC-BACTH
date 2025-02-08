

function Person(fisrtName, lastName){
    this.fisrtName = fisrtName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.fisrtName} ${this.lastName}`;
}

// Fullname
Person.prototype.getFullName = function(){
    return `${this.fisrtName} ${this.lastName}`;
}

const javid = new Person("Jagan", "Javid");

// Customer Object

function Customer(fisrtName, lastName, phone, membership){
    Person.call(this, fisrtName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype methodsto customer
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.test = function(){
    console.log("Yes im test");
}

const javidCustomer = new Customer("Jagan", "Javid", "111-1111-111", "standard");

console.log(javidCustomer);

console.log(javidCustomer.greeting());




