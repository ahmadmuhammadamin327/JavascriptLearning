// Arthimatic
{
let a = 5;
let b = 4;
console.log ("a = ", a," &  b = ", b);
console.log ("a + b =", a+b)
}
{
let a = 50;
let b = 15;
console.log ("a - b =", a-b)
}
{
let a = 50;
let b = 15;
console.log ("a / b =", a / b)
}
{
let a = 50;
let b = 15;
console.log ("a * b =", a * b)
}
{
let a = 50;
let b = 15;
console.log ("a % b =", a % b)
}
{
let a = 50;
let b = 15;
console.log ("a ** b =", a ** b)
}
// Assignment Operators
{
let a = 3;
let b = 2;
a += 4;
console.log("a = ", a);
}
{
let a = 3;
let b = 2;
a -= 4;
console.log("a = ", a); 
}
{
let a = 3;
let b = 2;
a *= 4;
console.log("a = ", a); 
}
// Comparison Operators
{
let a = 3;
let b = 2;
console.log("a == b", a == b);
}
{
let a = 3;
let b = 3;
console.log("a == b", a == b);
}
{
let a = 3;
let b = 3;
console.log("a != b", a != b);
}
{
let a = 3;
let b = 2;
console.log("a != b", a != b);
}
{
let a = 3;
let b = 2;
console.log("a === b", a === b);
}
// Logical Operators
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2)
}
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 5;
console.log("cond1 && cond2 = ", cond1 && cond2)
}
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 || cond2 = ", cond1 || cond2)
}
// Conditional Operators
{
let age = 21;
if (age > 18) {
    console.log("You Can Vote")
}
}
{
let age = 16;
if (age < 18) {
    console.log("You Cannot Vote")
}
}
{
let age = 21;
let mode = "light";
let color;
if(mode === "dark") {
    color = "black"
}
if(mode === "light") {
    color = "white"
}
console.log(color);
}
{
let age = 18;
let mode = "dark";
let color;
if(mode === "dark") {
    color = "black"
}
if(mode === "light") {
    color = "white"
}
console.log(color);
}
{
let mode = "light";
let color;
if(mode === "dark") {
    color = "black"
}
else{
    color = "white"
}
console.log(color);
}
{
let num = 10;
if (num % 2 === 0) {
    console.log(num, "is even");
}    
else {
    console.log(num, "is odd");
}
}
{
let num = 15;
if (num % 2 === 0) {
    console.log(num, "is even");
}    
else {
    console.log(num, "is odd");
}
}
// 3 Operators
{
let age = 21
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
}
{
let age = 17
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
}
{
let age = 27
age >= 18 ? console.log("adult") : console.log("not adult");
}
// Practice
{
let name = prompt("Hello!")
console.log(name);
}
{
let num = prompt("Enter a number");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
}
else {
    console.log(num, "is Not a multiple of 5");
}
}
// Practice 2
let score = 95;
let grade;
if (score >=90 && score<=100) {
    grade ="A"
}
else if (score >=70 && score<=89) {
    grade ="B"
}
else if (score >=60 && score<=69) {
    grade ="C"
}
else if (score >=50 && score<=59) {
    grade ="D"
}
else if (score >=0 && score<=49) {
    grade ="F"
}
console.log("according to your scores, your grade was : ", grade)