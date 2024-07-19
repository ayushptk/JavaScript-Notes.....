class hello{
    // In summary, constructors are an essential part of OOP, allowing you to initialize objects, set up dependencies, enforce invariants, and provide a single point of entry for object creation.
    constructor(){
        document.write("i am constructor...........")
    }
    message(){
        document.write("hello world from script using doc write");
    }
    sorry(){
        console.log("sorry for the inconvenience");
    }
}

let a = new hello(); 

a.message();
a.sorry();
// In summary, this code defines a class hello with two methods, creates an instance of the class, and calls both methods to output a string to the HTML document and log a message to the console.
