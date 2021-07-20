console.log("----Introduction----")

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env the program is being executed

// setInterval (() => {
//     console.log('hi')
// }, 1000)


console.log("-------------------------")
console.log("----Globals----")

// simple import:
const names = require('./4-names')
// destructuring import:
const { john, julien } = require('./4-names')
const sayHi = require('./5-utils')
// all types of imports using the require method:
const { items, singlePerson } = require('./6-alternativeExport')
const data = require('./6-alternativeExport')
require('./7-mind-grenade')


console.log(names)
console.log(items)
console.log(singlePerson)
console.log(data)

// console.log(` Names: ${names} `)
// console.log(` first item: ${items}`)
// console.log(` Second item: ${singlePerson}`)
// console.log(` All of them at a go: ${data}`)

sayHi("Vially")
sayHi(names.john)
sayHi(names.julien)

sayHi(john)
sayHi(julien)




