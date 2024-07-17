//The spread operator in JavaScript, denoted by ..., allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

function sum(name, ...args) {
    // function body
}

// In this example, the function sum takes a first parameter name and uses the rest parameter ...args to capture all additional arguments passed to the function into an array called args.

let arr = [20, 30, 40];
// sum("Ayush", arr); // ❌ //incorrect
// This call passes the entire array arr as a single argument, resulting in args being [ [20, 30, 40] ], which is not the intended result.

sum("Ayush Pathak", ...arr); // ✅
// Using the spread operator ...arr expands the array arr into individual elements. This effectively translates the call to sum("Ayush Pathak", 20, 30, 40), where name receives "Ayush Pathak" and args contains [20, 30, 40].
// The spread operator is used to:

//     Expand arrays or iterables into individual elements.
//     Pass the elements of an array as separate arguments to a function.
//     Create shallow copies of arrays or objects.

// In the context of the image, the spread operator ...arr is used to spread the array elements 20, 30, and 40 into the function call, ensuring they are passed as individual arguments rather than a single array.

