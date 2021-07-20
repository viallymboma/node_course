const os = require('os')

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.endianness())
// console.log(os.freemem())
// console.log(os.getPriority())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.loadavg())
// console.log(os.networkInterfaces())
// console.log(os.platform())
// console.log(os.release())
// console.log(os.setPriority())
// console.log(os.tmpdir())
// console.log(os.totalmem())
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.userInfo())
// console.log(os.version())
// console.log(os.EOL())
// console.log(os.constants())

// const user = os.userInfo
// console.log(user)

const currentOS = {
    os_type: os.type(),
    os_release: os.release(),
    os_total_mem: os.totalmem(),
    os_free_mem: os.freemem(),
}

console.log(`My OS core properties are as follow: ${ currentOS }`)
console.log(currentOS)

