// Accessing array elements traditionally
// const array = [1, 2, 3];
// const first = array[0];
// const second = array[1];

// Accessing object properties traditionally
// const obj = { name: 'Ayush', age: 30 };
// const name = obj.name;
// const age = obj.age;

//The Problem: Traditionally, accessing elements from arrays and properties from objects in JavaScript often involves repetitive and verbose syntax. For example, to get values from an array or object, we would do something like:


// The Solution: Introducing JavaScript destructuring! It's a powerful feature that allows you to extract array elements or object properties into distinct variables using a concise syntax. Here's how it works:
// Array destructuring
const [first, second] = [1, 2, 3];
// Object destructuring
const { name, age } = { name: 'Alice', age: 30 };

//Why Use It: Destructuring not only cleans up your code by reducing verbosity but also makes it more readable and easier to manage. It lets you unpack values from arrays or objects effortlessly, improving code efficiency and maintainability.

