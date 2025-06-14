// 6. var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// Ans: name and age will be undefined. We can use call to give function the scope of the object

// correct version
var person = { 
    name: "John Doe",
    age: 30,
    getDetails: function() { 
        console.log(this.name + " is " + this.age + " years old"); 
    } 
};
var getPersonDetails = person.getDetails;
getPersonDetails.call(person);