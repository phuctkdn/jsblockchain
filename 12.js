var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age:25,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
alert( person.firstName);
document.writeln(person.firstName + " is " + person.age + " year sold");


