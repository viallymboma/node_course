// ------------------------------------New module File------------------------------

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', 
    `Here are the result: ${first} and ${second}`,
    // flag will just duplicate the same content
    // { flag: 'a' }
    console.log('step write')
)

// console.log('done with this task')
// console.log('starting the next one')
console.log('end')