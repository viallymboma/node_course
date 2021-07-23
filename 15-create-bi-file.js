const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
    // const element = array[i];
    writeFileSync('./content/biggerRFS.txt', `Hi ${i}\n`, { flag: 'a' })
    
}