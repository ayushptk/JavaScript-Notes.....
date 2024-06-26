// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 deg");
// }, 3000);
//   });
//   let bangaloreWeather = new Promise((resolve, reject) =>
//     {
//       setTimeout(() => {
//         resolve("21 deg");
//       },7 000);
//     });
  
//   console.log("Fetching Delhi Weather Please wait...")
// let dehliW = await delhiWeather;
//   console.log("Fetched Delhi Weather: " )
//   let bangaloreW = await bangaloreWeather;
//   console.log("Fetched Bangalore Weather: " )
//   return [dehliW, bangaloreW];
  
// }
// console.log("Welcome to weather control room");
// let a=harry();
// a.then((value)=>{
//   console.log(a);
// });

async function ayush() //async function always returns a promise
  { 
  let delhiWeather = new Promise((resolve, reject) =>
    
    {
    setTimeout(() => {
      resolve("27 deg");
    }, 6000);
  });
    
  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 7000);
  });

  console.log("Fetching Delhi Weather. Please wait...");

  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather: " + delhiW);

  let bangaloreW = await bangaloreWeather;
  console.log("Fetched Bangalore Weather: " + bangaloreW);

  return [delhiW, bangaloreW]; //returning an array
}
const cherry = () =>
  {
    console.log("Hey I am cherry and I am not waiting");
  }
const main1 = async () => 
  {
    
  
console.log("Welcome to the weather control room");
let a = await ayush(); //await is used to wait for the promise to be fulfilled
let b = await cherry();
// a.then((value) => {
//   console.log(value);
});
    
  }
main1();
