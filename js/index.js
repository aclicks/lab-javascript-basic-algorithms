console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "Zed";
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

// usando array
const names = [(hacker2), (hacker1)];
names.sort();
if (names[0] === names[1]){
    console.log(`What?! You both have the same name?`);
}
else if (names[0] === hacker1){
    console.log(`The driver's name goes first`);
}
else if(names[0] === hacker2){
console.log(`Yo, the navigator goes first definitely`);
}

//mesma função anterior sem array
if (hacker1.localeCompare(hacker2) === 0){
    console.log(`What?! You both have the same name?. LocaleCompare`);
}
else if (hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first. LocaleCompare`);
}
else if(hacker1.localeCompare(hacker2) > 0){
console.log(`Yo, the navigator goes first definitely. LocaleCompare`);
}

// Bonus 1
console.log(`Bonus 1: Count words an "et"`)
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lectus arcu. Donec placerat, erat et dapibus suscipit, nibh nisl consectetur magna, in eleifend felis quam vitae turpis. Duis hendrerit ex id cursus gravida. Maecenas vel libero nec magna blandit lacinia ac et lacus. Proin sed urna a eros vestibulum pellentesque ac laoreet erat. Sed velit nunc, sagittis facilisis laoreet hendrerit, pellentesque quis tortor. Fusce convallis ligula at placerat dignissim. Duis ac enim sed sapien tincidunt interdum vitae in felis. Sed nec egestas nunc. Pellentesque finibus mauris a ligula ullamcorper aliquet. Fusce nec massa turpis. Praesent eu dui id risus blandit mattis. Integer interdum finibus nisl sit amet congue. Phasellus eu ipsum tortor. Sed porttitor mi arcu, consequat dapibus orci auctor vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sem quam, efficitur eget fermentum nec, vehicula suscipit ante. Aenean interdum posuere convallis. Maecenas ac lectus urna. Maecenas accumsan blandit purus ut molestie. Etiam fringilla eros ut accumsan commodo. Ut at lacus sapien. Donec nisi dolor, aliquet et nulla id, laoreet vestibulum diam. Pellentesque a lorem eu sapien pretium commodo. Morbi eu sem varius, euismod lacus sed, vulputate ante. Aenean pharetra vestibulum metus, sed vehicula est posuere eget. Etiam lacinia eget lectus in ultrices. Phasellus laoreet rutrum risus id feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel cursus libero. Aliquam rhoncus vitae erat sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec magna sit amet ligula tempor tincidunt. Proin nec vestibulum mauris.`;

let numberOfWords = 1; //começa em 1 por conta da última palavra que não tem espaço
for (let i = 0; i < paragraphs.length; i++){
    if (paragraphs[i] === " "){
        numberOfWords += 1; 
    }
}
console.log(`There are ${numberOfWords} words in this paragraph`);

let numberOfEt = 0;
for (let i = 0; i < paragraphs.length; i++){
    if (paragraphs[i] + paragraphs[i+1] + paragraphs[i+2] + paragraphs[i+3] === " et "){
        numberOfEt += 1; 
    }
}
console.log(`There are ${numberOfEt} "et" in this paragraph.`)

//Bonus 2
console.log(`Bonus 2: Palindrome Check`)
let phraseToCheck = "Was it a car or a cat I saw?";
let phraseClean = ""
let reversePhrase = "";

for (let i = 0; i < phraseToCheck.length; i++){
    if ((phraseToCheck[i] !== " ") && (phraseToCheck[i] !== "!") && (phraseToCheck[i] !== ",") && (phraseToCheck[i] !== "?") && (phraseToCheck[i] !== ".")){
        phraseClean += phraseToCheck[i].toLowerCase();
    }
    }

for (let i = (phraseClean.length - 1); i >= 0; i--) {
    reversePhrase += phraseClean[i];
}
if (phraseClean === reversePhrase){
    console.log(`"${phraseToCheck}" is a palindrome :)`);
}
else {
    console.log(`"${phraseToCheck}" is not a palindrome :(`);
}