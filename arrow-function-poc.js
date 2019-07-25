class Person {
    constructor(name) {
        this.name = name;
    }
    arrowFunction() {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }

    normalFunction() {
        setTimeout(function () {
            console.log(this.name);
        }, 2000);
    }
}

let person = new Person("vishnu");

person.arrowFunction();
Array.apply(person.normalFunction());