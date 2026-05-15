 const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

// const cars = ["honda", "Maruti" ,"Mahindra"]

// let myObj ={
//     name:"Kumar",
//     age:26
// }

// const myFunction = function(){
//     console.log("Hello world");
    
// }
// console.log( typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof id);

// let cmName = "Samarat"
// let anothername = cmName
//  anothername = "PK"

// console.log(cmName);
// console.log(anothername);

let userOne = {
    email: "kk@gmail.com",
    add:"Kolkatta"
}

let userTwo = userOne
userTwo.email = "gne@"
console.log(userOne.email);
console.log(userTwo.email);



