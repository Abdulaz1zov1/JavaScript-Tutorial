
const person = [
    { roll: 1, name: "Oyatillo" },
    { roll: 2, name: "Erkin" }
];

person.sort(
    function (a, b) {
        const upperA = a.name.toLowerCase();
        const upperB = b.name.toLowerCase();

        if (upperA < upperB) return -1;
        if (upperA > upperB) return 1;
        return 0;
    }
)
console.log(person);