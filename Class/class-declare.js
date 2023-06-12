class Student {
    constructor(fname) {
        this.fname = fname;
        this.write = function () {
            console.log(this.fname + " writing...");
        }
    }
    read() {
        console.log(this.fname + " reading...");
    }
}

const aashish = new Student("AASHISH");
aashish.read();
aashish.write()

