const time = new Date()
const currentYear = Number(time.getFullYear())

let yrbarbie = 1959
let yrbomb = 1930

let product001 = {}
product001.name = 'Barbie Doll'
product001['forChildren?'] = true
product001.details = {madeBy: 'Ruth Handler', madeIn: yrbarbie, yearsOld: Number(currentYear - yrbarbie)}


let product002 = {}
product002.name = 'Nuclear Fallout'
product002['forChildren?'] = NaN
product002['details'] = {madeBy: 'Project Manhatan', madeIn: yrbomb, yearsOld:
Number(currentYear - yrbomb)}

let product003 = product001
product003.name = 'Barbie Movie > Oppenheimer'

console.log(product001)
console.log(product002)
console.log(product003)
