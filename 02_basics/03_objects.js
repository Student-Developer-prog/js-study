const mySym = Symbol("key1")



const JsUser = {
    name : "Kumar",
    "Full Name": "Kamlesh Kumar",
    [mySym]: "mykey1",
    age : 25,
    location: "Patna",
    email: "@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "@funny.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





