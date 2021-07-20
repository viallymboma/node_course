// console.log("----Introduction----")

// // __dirname  - path to current directory
// // __filename - file name
// // require    - function to use modules (CommonJS)
// // module     - info about current module (file)
// // process    - info about env the program is being executed

// // setInterval (() => {
// //     console.log('hi')
// // }, 1000)


// console.log("-------------------------")
// console.log("----Globals----")

// // simple import:
// const names = require('./4-names')
// // destructuring import:
// const { john, julien } = require('./4-names')
// const sayHi = require('./5-utils')
// // all types of imports using the require method:
// const { items, singlePerson } = require('./6-alternativeExport')
// const data = require('./6-alternativeExport')
// require('./7-mind-grenade')


// console.log(names)
// console.log(items)
// console.log(singlePerson)
// console.log(data)

// // console.log(` Names: ${names} `)
// // console.log(` first item: ${items}`)
// // console.log(` Second item: ${singlePerson}`)
// // console.log(` All of them at a go: ${data}`)

// sayHi("Vially")
// sayHi(names.john)
// sayHi(names.julien)

// sayHi(john)
// sayHi(julien)



// ------------------------------------New module HTTP------------------------------




// const os = require('os')

// // console.log(os.arch())
// // console.log(os.cpus())
// // console.log(os.endianness())
// // console.log(os.freemem())
// // console.log(os.getPriority())
// // console.log(os.homedir())
// // console.log(os.hostname())
// // console.log(os.loadavg())
// // console.log(os.networkInterfaces())
// // console.log(os.platform())
// // console.log(os.release())
// // console.log(os.setPriority())
// // console.log(os.tmpdir())
// // console.log(os.totalmem())
// // console.log(os.type())
// // console.log(os.uptime())
// // console.log(os.userInfo())
// // console.log(os.version())
// // console.log(os.EOL())
// // console.log(os.constants())

// // const user = os.userInfo
// // console.log(user)

// const currentOS = {
//     os_type: os.type(),
//     os_release: os.release(),
//     os_total_mem: os.totalmem(),
//     os_free_mem: os.freemem(),
// }

// console.log(`My OS core properties are as follow: ${ currentOS }`)
// console.log(currentOS)






// ------------------------------------New module Path------------------------------

// const path = require('path');
// // const { delimiter } = require('path/posix');
// console.log(path.sep)
// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// // const absolute = path.delimiter(filePath)
// // console.log(absolute)
// console.log(`--------1----------`)
// console.log(path.dirname(filePath))
// console.log(`--------2----------`)
// console.log(path.extname(filePath))
// console.log(`--------3----------`)
// // console.log(path.format())
// console.log(`--------4----------`)
// console.log(path.isAbsolute(filePath))
// console.log(`--------5----------`)
// console.log(path.join())
// console.log(`--------6----------`)
// console.log(path.join(filePath))
// console.log(`--------7----------`)
// console.log(path.normalize(filePath))
// console.log(`--------8----------`)
// console.log(path.parse(filePath))
// console.log(`--------9----------`)
// // console.log(path.posix)
// console.log(`--------10----------`)
// // console.log(path.relative(filePath))
// console.log(`--------11----------`)
// console.log(path.resolve())
// console.log(`--------12----------`)
// console.log(path.sep)
// console.log(`--------13----------`)
// console.log(path.toNamespacedPath(filePath))
// console.log(`--------14----------`)
// // console.log(path.win32(filePath))
// console.log(`--------15----------`)
// console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))





// ------------------------------------New module File------------------------------

// const { readFileSync, writeFileSync } = require('fs')

// const first = readFileSync('./content/first.txt', 'utf-8')
// const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

// writeFileSync(
//     './content/result-sync.txt', 
//     `Here are the result: ${first} and ${second}`,
//     // flag will just duplicate the same content
//     // { flag: 'a' }
// )



// // ------------------------------------New module Asynchronous------------------------------

// const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result;

//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile (
//             './content/result-sync.txt', 
//             `Here are the result: ${first} and ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })






// // ------------------------------------New module HTTP------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.end('Welcome to home')
//     } 
//     if (req.url === '/about') {
//         res.end('Welcome to about')
//     }

//     // console.log(req)
//     // res.write('Welcome')
//     res.end(`
//         <h1>Oops!</h1>
//     `)
// })

// server.listen(5000)





// ------------------------------------New module NPM------------------------------

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)