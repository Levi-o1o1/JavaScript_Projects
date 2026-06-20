const obj = {
    name: "Alice",
    age: 23,
    sayHell: function(){
        return "hello"
    }
}

const obj2 = {
    hair_color: "red",
    arr:[1,2,3],
    name: "aarya"

}
const obj3 = {...obj, ...obj2}
console.log(obj3)