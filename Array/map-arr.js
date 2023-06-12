// Filter, Map in Array
//------------------------FILTER---------------------
const numbers = [1, 2, 3, 4, 5, 6, 7];

const newArray = numbers.filter(value => value >= 4);
console.log(newArray)

//------------------------MAPPING--------------------
const items = [6, 4, 8, 2, 0];

const listed = items.map(function (value) {
    return value
});

const obj = items.map(n => ({ value: n }))
console.log(obj);