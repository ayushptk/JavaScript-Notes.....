let p1= new Promise((resolve, reject)=>
{
  console.log("Promise is pending");
  setTimeout(()=>
    {
      console.log("I am a promise and I am fulfilled");
      resolve(true);
    }, 5000);
})
   
//rejeccted promise


let p2 = new Promise((resolve, reject)=>{
  console.log("Promise is pending");
  setTimeout(()=>{
    console.log("I am a promise and I am rejected");
    reject(new Error("I am an error")); //rejection 
  }, 5000);
})
console.log(p1,p2);
// To get the value
p1.then((value)=>
  {
    console.log(value);
  })
// // To catch the error main tarika ho haii
// p2.catch((error)=>
//   {
//     console.log("some error occured in p2");
//   })

p2.then((value)=> //altrnative way to catch the error
  {
    console.log(value);
  },(error)=>{
  console.log(error);
  })