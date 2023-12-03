let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 s")
         resolve(56)
    },2000)
})
//Promise Chaining
p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        // console.log("Promise 2")
        resolve("Promise 2")
        },2000)
    })
    return p2
}).then((value)=>{
    console.log("WE are done")
})

//Quiz
const loadscript=(src)=>{

    return newPromise((resolve,reject)=>{
    let script=document.createElement("script")
    // script.type="Promise_chaining/pc.js"
    script.src=src
    document.body.appendChild(script)
    script.onload(()=>{
        resolve(1)
    })
    script.onerror=()=>{reject(0)}
})
}
let P1=loadscript("https://csdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
P1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("we are having error loading this script")
})
