console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "André";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Mariana";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length){
    console.log(`Both names have the same number of characters, which is ${hacker1.length}`);
}    
// Iteration 3: Loops
let upperCaseDriver = "";
for (let i = 0; i < hacker1.length; i++) {
    upperCaseDriver += hacker1[i].toUpperCase() + " ";
}
console.log (upperCaseDriver);

let reverseNavigator = "";
for (let i = (hacker2.length - 1); i >= 0; i--) {
    reverseNavigator += hacker2[i].toUpperCase();
}
console.log (reverseNavigator);

const names = [(hacker2), (hacker1)];
names.sort();
switch (names[0]){
    case (names[0] === hacker1):
    console.log(`The driver's name goes first`)
    break;
    case (names[0] === hacker2):
    console.log(`Yo, the navigator goes first definitely`)
    break;
    case (hacker1[i] === hacker2[i]):
    console.log()
}
    