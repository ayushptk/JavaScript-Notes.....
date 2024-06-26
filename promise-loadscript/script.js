const loadscript = (src) =>
  {
    return new Promise(( resolve, reject) =>
      {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () =>
          {
            resolve("loadscript is resolved")
          }
        script.onerror = () => { reject(0)  }
  })
  }
 let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha")
p1.then((value)=>{
  console.log(value)
}).catch((error)=>
  {
           console.log("We are sorry but we are having problems loading this script")
})