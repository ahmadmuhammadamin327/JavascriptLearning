{ 
for (let i = 1; i <= 5; i++) {
    console.log("Ahmad")
}
}
{
for (let i = 1; i <= 50; i++) {
    console.log("Ahmad Amin")
}
}
{
for (let i = 1; i <= 1000; i++) {
    console.log("Ahmad Muhammad.Amin")
}
}
console.log("Loop has ended");
// Calculation for sum 1 of 5
{
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("sum = ", sum);
}
}
// While Loops
let i = 1;
while(i <= 5) {
    console.log("i = ", i);
    i++;
}
// do While Loops
{
let i = 1;
do {
    console.log("i = ", i);
    i++;
} while(i <= 10);
}
// for of Loops
{
let str = "Ahmad";

for (let char of str) {
  console.log(char);
}
}
// for of Loops
{
let str = "AhmadMuhammadAmin";

for (let i of str) {
  console.log("i = ", i);
}
}
// for of Loops
{
let str = "Javascript";
let length = 0;
for (let i of str) {
  console.log("i = ", i);
  length++;
}
console.log("string length = ", length);
}
// for in Loops
{
let student = {
    name : "Ahmad",
    age : 21,
    cpga : 7.5,
    isPass : true,
}
for(let key in student) {
    console.log("key = ", key,"value = ",student[key]);
}
}
// Practice 01
{
for(let num = 0; num<= 100; num++) {
    if(num % 2 == 0) {
        console.log("num = ", num);
    }
}
}
// Practice 01 Example
{
for(let num = 0; num<= 100; num++) {
    if(num % 2 != 0) {
        console.log("num = ", num);
    }
}
}
// Practice 02
{
let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum) {
    userNum = prompt("You Entered Wrong Number,Guess Again Number : ");
}
}
console.log("Congratulations, You Entered The Right Number");
// Strings For Length
let str = "Apna College";
let str2 = "Ahmad Amin";
console.log(str[2]);
// Template Literals
console.log("Apna\nCollege");