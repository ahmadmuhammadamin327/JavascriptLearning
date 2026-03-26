// Get the button element
let btn = document.getElementById("myBtn");

// Add click event
btn.addEventListener("click", function() {
  alert("Button clicked! Hello from JS.");
});
// Second
{
document.getElementById("clickBtn").addEventListener("click", function() {
  alert("Button Clicked!");
});
}
// Third
{
let box = document.getElementById("hoverBox");

box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "red";
});
}
// Fourth
{
let input = document.getElementById("inputField");
let output = document.getElementById("keyOutput");

input.addEventListener("keydown", function(e) {
  output.textContent = "You pressed: " + e.key;
});
}