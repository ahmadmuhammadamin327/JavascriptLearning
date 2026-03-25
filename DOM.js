let arr = [1, 2, 3, 4];

let sum = arr.reduce(function(acc, val) {
    return acc + val;
}, 0);

console.log(sum);