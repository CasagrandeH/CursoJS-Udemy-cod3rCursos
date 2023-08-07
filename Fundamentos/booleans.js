let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1 
console.log(!isActive)
console.log(!!isActive)

console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log(!!(isActive = true))
console.log(!!(isActive = false))
console.log(!!(isActive = 1))
console.log(!!(isActive = 0))//'?????????'
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let up = t => t.toUpperCase()
console.log(`Pra finalizar... ${up('bora meter aquele!')}`)
console.log(`console.log(!!(undefined || [] || '')) ===`,!!(undefined || [] || ''))
