console.log("Ahmad");
// console.log("Ahmad");
/* console.log("Ahmad");*/
// Arthimatic Opertator
let a = 5;
let b = 2;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
let x = 15;
let y = 22;
console.log("x + y = ", x + y);
{
let x = 15;
let y = 22;
console.log("x - y = ", x - y);
}
{
let x = 15;
let y = 22;
console.log("x * y = ", x * y);
}
{
let x = 5;
let y = 2;
console.log("x / y = ", x / y);
}
{
let x = 5;
let y = 2;
console.log("x % y = ", x % y);
}
{
let x = 5;
let y = 2;
console.log("x ** y = ", x ** y);
}
// Unary Operators
{
let a = 5;
let b = 2;
console.log("a = ", a, "& b = ", b);
a = a + 1;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a++;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a = a - 1;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a--;
console.log("a = ", a);
}
// Pre
{
let a = 5;
let b = 2;
console.log("++a = ", ++a);
}
// Post
{
let a = 5;
let b = 2;
console.log("a++ = ", a++);
console.log("a = ", a);
}
// Pre
{
let a = 5;
let b = 2;
console.log("--a = ", --a);
}
// Post
{
let a = 5;
let b = 2;
console.log("a-- = ", a--);
console.log("a = ", a);
}
// Assignment Operators
{
let a = 5;
let b = 2;
a += 5;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a -= 5;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a *= 5;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a %= 5;
console.log("a = ", a);
}
{
let a = 5;
let b = 2;
a **= 5;
console.log("a = ", a);
}
// Comparison Operators
{
let a = 5;
let b = 2;
console.log("a == b", a == b);
}
{
let a = 5;
let b = 5;
console.log("a == b", a == b);
}
{
let a = 5;
let b = 5;
console.log("a != b", a != b);
}
{
let a = 5;
let b = 2;
console.log("a != b", a != b);
}
{
let a = 5;
let b = 2;
console.log("a !== b", a !== b);
}
{
let a = 5;
let b = 2;
console.log("a === b", a ===b);
}
// Comparion Operator Greater and less than
{
let a = 5;
let b = 2;
console.log("a > b", a > b);
}
{
let a = 5;
let b = 2;
console.log("a < b", a < b);
}
{
let a = 5;
let b = 5;
console.log("a <= b", a <= b);
}
{
let a = 5;
let b = 5;
console.log("a >= b", a >= b);
}
// Logical Operators And
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2", cond1 && cond2);
}
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 8;
console.log("cond1 && cond2", cond1 && cond2);
}
// Logical Operators OR
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 || cond2", cond1 || cond2);
}
{
let a = 6;
let b = 5;
let cond1 = a < b;
let cond2 = a === 8;
console.log("cond1 || cond2", cond1 || cond2);
}
// Logical Operators Not
{
let a = 6;
let b = 5;
let cond1 = a > b;
let cond2 = a === 6;
console.log("!cond1", !cond1);
console.log("!cond2", !cond2);
}
{
let a = 6;
let b = 5;
let cond1 = a < b;
let cond2 = a === 4;
console.log("!cond1", !cond1);
console.log("!cond2", !cond2);
}
// Conditional Statement Vote
{
let age = 21;
if(age >= 18) {
    console.log("YOU CAN VOTE");
}
}
{
let age = 17;
if(age < 18) {
    console.log("YOU CANNOT VOTE");
}
}
// Conditional Statement If Statement
{
let mode = "Dark"
let color;
if (mode === "Dark") {
    color = "Black"
}
if (mode === "Light") {
    color = "White"
}
console.log(color);
}
{
let mode = "Light"
let color;
if (mode === "Dark") {
    color = "Black"
}
if (mode === "Light") {
    color = "White"
}
console.log(color);
}
// Conditional Statement Else Statement
{
let mode = "Light"
let color;
if (mode === "Dark") {
    color = "Black"
} else {
    color = "White";
}
console.log(color);
}
{
let mode = "Dark"
let color;
if (mode === "Dark") {
    color = "Black"
} else {
    color = "White";
}
console.log(color);
}
// Conditional Statement Else Statement Example
{
let age = 23;
if (age >= 18) {
    console.log("YOU CAN VOTE");
} else {
    console.log("YOU CANNOT VOTE");
}
}
{
let age = 17;
if (age >= 18) {
    console.log("YOU CAN VOTE");
} else {
    console.log("YOU CANNOT VOTE");
}
}
// Conditional Statement Even And Odd Number Example
{
let num = 20;
if (num % 2 === 0) {
    console.log(num,"IS EVEN");
} else {
    console.log(num, "IS ODD");
}
}
{
let num = 17;
if (num % 2 === 0) {
    console.log(num,"IS EVEN");
} else {
    console.log(num, "IS ODD");
}
}
{
let num = 10;
if (num % 2 === 0) {
    console.log(num,"IS EVEN");
} else {
    console.log(num, "IS ODD");
}
}
// Conditional Statement Else-if Statement
{
let age = 20;
if(age < 18) {
    console.log("JUNIOR");
} else if (age > 40) {
    console.log("SENIOR");
} else {
    console.log("MIDDLE")
}
}
{
let age = 15;
if(age < 18) {
    console.log("JUNIOR");
} else if (age > 60) {
    console.log("SENIOR");
} else {
    console.log("MIDDLE")
}
}
{
let age = 61;
if(age < 18) {
    console.log("JUNIOR");
} else if (age > 60) {
    console.log("SENIOR");
} else {
    console.log("MIDDLE")
}
}
// Conditional Statement if Else-if And Else Statement Example
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "light blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "White";
}
console.log(color);
{
let mode = "blue";
let color;
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "light blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "White";
}
console.log(color);
}
// Conditional Statement For Ternary Statement
{
let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
}
{
let age = 17;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
}
// Conditional Statement For Practice 01
let num = prompt("Hello!");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is not a multiple of 5");
}
// Conditional Statement For Practice 02
let marks = 90;
if (marks >= 80) {
    console.log("A GRADE");
} else if (marks >= 60) {
    console.log("B GRADE");
} else {
    console.log("Fail");
}
console.log(marks);
// Conditional Statement For Practice 02 IMPORTANT
{
let score = 75;
let grade;
if(score >= 90 && score <= 100) {
    grade = "A GRADE";
} else if(score >= 70 && score <= 89) {
    grade = "B GRADE";
} else if(score >= 60 && score <= 69) {
    grade = "C GRADE";
} else if (score >= 50 && score <= 59) {
    grade = "D GRADE";
} else if(score >= 0 && score <= 49) {
    grade = "F GRADE";
}
console.log(grade);
}
{
let score = 95;
let grade;
if(score >= 90 && score <= 100) {
    grade = "A GRADE";
} else if(score >= 70 && score <= 89) {
    grade = "B GRADE";
} else if(score >= 60 && score <= 69) {
    grade = "C GRADE";
} else if (score >= 50 && score <= 59) {
    grade = "D GRADE";
} else if(score >= 0 && score <= 49) {
    grade = "F GRADE";
}
console.log(grade);
}
{
let mode = "dark";
let color;
switch (mode) {
  case "dark":
    color = "black";
    break;

  case "light":
    color = "white";
    break;

  default:
    color = "gray";
}
console.log(color);
}
{
let balance = 800;
if (balance >= 1000) {
    console.log("Shopping is Allowed");
} else {
    console.log("Not Allowed Shopping");
}
}
// String and Number Add
{
let a = 10;
let b = "5";
let result = a + b;
console.log(result);
}
{
let a = "10";
let b = 5;
let result = a + b;
console.log(result);
}
{
let a = "10";
let b = "2";
let result = a + b;
console.log(result);
}
{
let a = 10;
let b = "2";
let result = a + Number(b);
console.log(result);
}
{
let a = "100";
let b = "20";
let result = Number(a) + Number(b);
console.log(result);
}
{
let a = "5";
let b = 10;
let result = Number(a) + b;
console.log(result);
}
// Strings ko strings ma add krna number bana kr
{
let a = "29"
let b = "21"
let res = Number(a) + Number(b);
console.log(res);
}
// If and Else If and Else Practice
{
let marks = 90;
if(marks > 89) {
    console.log("A GRADE");
} else if (marks > 69) {
    console.log("B GRADE");
} else {
    console.log("You Fail")
}
}
// Number to number
{
let a = "5";
let b = 10;

let result = Number(a) + b;

console.log(result);
}
// ParseInt Method
{
let a = "20";
let b = 5;

let result = parseInt(a) + b;

console.log(result);
}
// (Unary Plus) Method
{
let a = "8";
let b = 2;

let result = +a + b;

console.log(result);
}
// This is a Commit