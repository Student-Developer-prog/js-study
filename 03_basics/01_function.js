// function addTwonumbers(num1,num2){
//     console.log(num1+num2);
    
// }
// const result = addTwonumbers(3,4)

function addTwonumbers(num1,num2){
    // let result = num1 + num2
    // console.log("before return.");
    
    return num1+num2
    // console.log("after return");
    
    
}
const result = addTwonumbers(3,4)
// addTwonumbers(3,"4")
// addTwonumbers(3,"a")
// addTwonumbers(3,null)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        // console.log("please enter a username")
        return
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("kumar"))

// console.log(loginUserMessage(" "))
// console.log(loginUserMessage( ))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Kumar",
    price: 199
}
function handleObject(anyobject){
   console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`);

   
}
// handleObject(user)
handleObject({
    username: "Ram",
    price: 499
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
     return getArray[0]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([50,100,150]));






