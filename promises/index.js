let promise=new Promise(function(resolve, reject){
console.log("hello")
  resolve(56)
  
})

console.log("Hello World 1 ");
setTimeout(function() {
  console.log("Hello World 2 ");

},2000);

console.log("Hello World 3 ");
//setTimeout function is used to delay the execution of a function.

console.log(promise);
