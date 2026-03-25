function myfunction() {
    console.log("Welcome To Apna College!");
    console.log("I Like JS!");
}
myfunction();
// Repeat code
{
function myfunction() {
    console.log("Welcome To My House :");
    console.log("I Like Cocomo But Mujy Bi Do!");
}
myfunction();
myfunction();
}
// Parameter for functions
{
function myfunction(msg) {
    console.log(msg);
}
myfunction("I LOVE MY MOTHER AND FATHER")
}
// Functions Two number Sum
{
function sum(a, b) {
    s = a + b;
    return s;
}
let val = sum(3, 8);
console.log(val);
}
// Sum function
function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
}
// Multiple function
function sum(a, b) {
    return a * b;
}
const arroSum = (a, b) => {
    console.log(a * b);
}
// Subtract function
function sum(a, b) {
    return a - b;
}
const arrowSub = (a, b) => {
    console.log(a - b);
}
// Hello
const printHello = () => {
    console.log("HEllo");
}
// Question Yani Practice 01
function countVowels(str) {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    console.log(count);
}