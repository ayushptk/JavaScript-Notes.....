function sum(name,...args){
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
console.log(arguments);
document.write(`hello ${name}`);
let sum=0;
for(let i in args){
sum=sum+args[i];
}
document.write(sum + "<br>");
}
// sum(20,30,40);
// sum(20,30);
// sum("Ayush",30,40);
// it will show the error in code so we 
// used the rest operation for these problem
sum("Ayush:",30,50);
