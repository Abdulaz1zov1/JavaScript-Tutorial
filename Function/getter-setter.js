const person = {
    firstName: "Oyatillo",
    lastName: "Abdulazizov",

    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}


console.log(person.fullName)
console.log(person)