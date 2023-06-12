const numbers = [1, 2, 3, 4, 5, 6];

let item = numbers.every(function (value) {
    return value >= 0;
})

console.log(item);
