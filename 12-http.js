const http = require('http')

const server = http.createServer((req,res)=> {
    if(req.url === '/' ){
        res.end('Welcome to my Home Page')
    }
    if(req.url === '/about'){
        res.end('Here is our short about history')
    }
    res.end(`
    <h1>OOPS!</h1><p>We cant seem to find the page you are looking for</p>
    <a href="/">backhome</a>
    `)
})

server.listen(5000)