const nums = [1,2,3,4,5]
console.log(nums)
let result = nums.map(function(e) {
    return e * 2
})
console.log(result)

/* for (let i = 10; i > 0; i--) {
    result = result.map(function(e) {
    return e * 2
})
console.log(result)
} */

const somaDez = e => e + 10
const triplo = e => e * 3
const paraDinhero = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

let newResult = nums.map(somaDez).map(triplo).map(paraDinhero)
console.log(newResult)