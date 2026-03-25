let marks = [97, 82, 80, 77, 66];
console.log(marks);
{
let heros = ["IRONMAN", "THORS", "HULKS", "AVENGERS", "SPIDERMAN", "ANTMAN"];
console.log(heros);
}
// Arrays Ma Loops Ka Use FOR LOOP
{
let heros = ["IRONMAN", "THORS", "HULKS", "AVENGERS", "SPIDERMAN", "ANTMAN"];
for(let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}
}
// Arrays Ma Loops Ka Use FOR
{
let cities = ["Islamabad", "Peshawar", "Lahore", "Kasur", "Quetta"];
for (let i of cities) {
    console.log(i.toUpperCase());
}
}
// Question 01
{
let marks =[85, 99, 78, 57, 32, 94];
let sum = 0;
for(let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);
}
// Question 02
{
let items =[259, 645, 300, 800, 501, 900];
let i = 0;
for(let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`)
    i++;
}
}
// Array and push
{
let foodItems = ["Potato", "Apple", "Banana", "Orange"];
foodItems.push("Chips", "Juice");
console.log(foodItems);
}
// Array and pop
{
let foodItems = ["Potato", "Apple", "Banana", "Orange"];
foodItems.pop();
console.log(foodItems);
}
// Array and strings
{
let markss=[259, 645, 300, 800, 501, 900];
console.log(markss.toString());
console.log(markss);
}
// Array and Conact
{
let marvelHeroes = ["Thor", "Spiderman", "Mannu"];
let dcHeroes = ["Avengers", "Goodman", "Ahmad"];
let heros = marvelHeroes.concat(dcHeroes);
console.log(heros);
}
// Array and splice and slice
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2,2,101,102);
// Add Element
arr.splice(4, 0, 101);
// Delete Element
arr.splice(3, 1,);