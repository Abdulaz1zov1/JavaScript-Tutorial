function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));


// -----------------------------------------------

function sum2() {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    return total;
}
console.log(sum2(1, 2, 3, 4, 5));