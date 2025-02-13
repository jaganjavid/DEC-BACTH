

const person = (function(){

    const x = 5;

    return {
        x
    }

})();


const person2 = (function(){

    const x = 10;

    return {
        x
    }

})();

console.log(person.x)
console.log(person2.x)
