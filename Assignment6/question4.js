// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static averageAge(peopleArray) {
        if (!peopleArray.length) return 0;
        const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
        return totalAge / peopleArray.length;
    }
}

const person1 = new Person("Eklavya", "Snmotra", 21);
const person2 = new Person("Anuj", "Sharma", 21);
const person3 = new Person("Ankush", "Sharma", 32);

console.log(person1.fullName());
console.log(Person.averageAge([person1, person2, person3]));  

