/// this function in js like self in python 

const person = {
    name: "Raj",
    greet() {
        console.log(`hello, my name is ${this.name}`);
    },
};

person.greet(); // output is , hello, my name is Raj

const person2 = {
    name: "Kumar",
    greet() {
        console.log(`hello, my name is ${this.name}`);
    },
};

person2.greet(); // output is , hello, my name is Kumar