// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests; 
    }

    greeting() {
        return `Hi, I'm ${this.name}. I'm ${this.age} years old and I like ${this.interests}.`;
    }

    farewell() {
        return `Goodbye from ${this.name}!`;
    }
}

// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

class Student extends Person{
    constructor(name, age, gender, interests, studies) {
        super(name, age, gender, interests); 
        this.studies = studies;
    }
    greeting() {
        return `Hi, I'm ${this.name}, a student studying ${this.studies}. I'm ${this.age} years old and I like ${this.interests}.`;
    }
}
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person{
    constructor(name, age, gender, interests, subjectTaught) {
        super(name, age, gender, interests); 
        this.subjectTaught = subjectTaught;
    }
    farewell() {
        return `Goodbye from ${this.name}, who teaches ${this.subjectTaught}.`;
    }
}
const person = new Person("Eklavya", 21, "ale", ["Raeding", "Table Tennis"]);
console.log(person.greeting());  
console.log(person.farewell());   

const student = new Student("Aarushi", 22, "female", "coding", "Computer Science");
console.log(student.greeting());  

const teacher = new Teacher("Sahil", 45, "male", "math", "Mathematics");
console.log(teacher.farewell()); 
