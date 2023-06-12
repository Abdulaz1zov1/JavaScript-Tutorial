// Finding elements in array(Primitives)

const arr = [78, 23, 45, 78, 55, 90];
console.log(arr.indexOf(45, 0));


/*--------------------------------FINDING ELEMENTS(OBJECTS)-----------------------------------*/

const persons = [
    {
        name: 'a',
        salary: 900000
    },
    {
        name: 'b',
        salary: 800000
    }
];

// -----------------------------------------OBJECT RETURN------------------------------
const person = persons.find(function (person) {
    return person.name === 'a';
});
console.log(person)

// ----------------------------------------INDEX RETURN--------------------------------
const person1 = persons.findIndex(function (person1) {
    return person1.name === 'a';
});

console.log(person1) 