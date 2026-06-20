const numbers = [1,2,3,4,5];
const doubled = numbers.map((num)=> num * 2);
console.log(doubled); // output is [2,4,6,8,10]

const users = [
    {name: "Arjun", age: 25},
    {name: "Bob", age: 30},
];
const names = users.map((user)=> user.name);
console.log(names); /// output is ['Arjun','Bob']

const numbers2 = [1,2,3,4];
const sum = numbers2.reduce((acc,num)=> acc + num, 0);
console.log(sum); /// output is 10

const number3 = [1,2,3,4,5];
const evenNumbers = number3.filter(num => num % 2 == 0);
console.log(evenNumbers); // [2,4]

