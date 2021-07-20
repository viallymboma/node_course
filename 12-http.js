// ------------------------------------New module HTTP------------------------------

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to home')
    } 
    if (req.url === '/about') {
        res.end('Welcome to about')
    }

    // console.log(req)
    // res.write('Welcome')
    res.end(`
        <h1>Oops!</h1>
    `)
})

server.listen(5000)