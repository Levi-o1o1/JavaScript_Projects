// In functions, parameters are placeholders defined in the function, while 
// arguments are the actual values you pass when calling the function.


// type 1 of function
function greet(name){ // name is paramenter
    console.log("Hello " + name);
}

greet("ayush"); // ayush is the argument 

// type 2 

const problem = function(name){

}

// type 3
// arrow function is new type of fucntion in es 
const bank = (name) => {
    return () => name
}
bank("rajkumar")
bank()()
console.log(bank)