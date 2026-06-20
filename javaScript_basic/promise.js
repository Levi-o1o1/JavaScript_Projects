const myPromise = new Promise((resolve, reject)=>{
    if(false){
        resolve("good"); // flfill the promise
    }else{
        reject("bad"); // reject the promise
    }
});

myPromise.then((value)=> {
    console.log(value)
}). catch((value)=>{
    console.log(value)
}).finally((value)=>{
    console.log("everything good ")
}).finally((value)=>{
    console.log("always")
})