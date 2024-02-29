let dated = require('date-format')
let timed = dated("hh-MM-yyyy", new Date())
console.log(timed);
let a = 10
let b = 5
let c = a +b
console.log(c);
// let amin = 'amin sisir apur'
// let splits = amin.split("")
let sisir = [3,4,5,6,11]
let tub = sisir.reduce((ka,b)=>ka+b)
console.log(tub)
