const items = [12, 34, 45, 67, 34, 89];

// Removing last element
items.pop();

// Removing first element
items.shift();

// Removing 2 elements starting from index 3
items.splice(3, 2);

console.log(items);

// --------------------------------------------------------

//Removing all elements from array
let number = [1, 2, 3, 4, 5];

// Use with single array 
number = [];

// Use when multiple object referencing a single array
number.length = 0;