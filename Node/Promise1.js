let a = 2

console.log(a)

let p = new Promise( (resolve, reject) => {
    if (a == 1) {
        resolve(3)
    } 
})

p.then( valor => console.log(valor * 2))
    