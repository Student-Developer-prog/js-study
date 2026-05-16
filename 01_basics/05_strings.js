const name = "Kumar"
const repoCount = 50
// console.log(name + repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hacker")
console.log((gameName[0]));
console.log((gameName[1]));
console.log((gameName[2]));
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-2,-1)
console.log(anotherString);

const newStringOne = "     Bihar  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Bihar.com"
console.log(url);
console.log(url.replace('.com','in'));
console.log(url.includes("Bihar"));
console.log(url.includes("ram"));

const str  = "Chapra-Patna-Bihar"
console.log(str.split("-"));


















