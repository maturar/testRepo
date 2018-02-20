// public on arguments to the constructor is a shorthand 
// that allows us to automatically create properties with that name.
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log("hello world"); // run the "hello world" direcly (on the server)
//document.body.innerHTML = greeter(user); // run the "hello world in the browser"
