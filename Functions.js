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
// For Each Function Use
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printval(val) {
    console.log(val);
});
// For Each Function Use Second Way
{
let arr = ["Pakistan", "Peshawar", "Islamabad", "Lahore"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});
}
// Practice Question 01
let nums = [1, 4, 6, 9, 12];
nums.forEach((num) => {
    console.log(num * num)
});
// Practice Question 01 Second Way
{
let nums = [10, 8, 5];
let calcSquare =(num) => {
    console.log(num * num);
};
nums.forEach(calcSquare);
}
// Function Use for Even Number
{
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
}
// Function Use for Odd Number
{
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 !== 0;
});
console.log(evenArr);
}
// Function use Reduced
{
let arr = [1, 2, 3, 4,];
const output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(output);
}
// Function use Reduced Larger number
{
let arr = [1, 2, 3, 4];
const output = arr.reduce((res, curr) => {
    return res > curr ? res : curr;
});
console.log(output);
}
// Practice Number 01 for Apna College
{
let marks = [97, 92, 77, 34, 94, 23];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);
}