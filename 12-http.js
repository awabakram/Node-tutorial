const http = require("http")

const server = http.createServer((req,res)=>{
    
    if(req.url === "/")
    {
        res.end("Welcome to our home page")
        return
    }
    
    if(req.url === "/about")
    {
        res.end("Here is our history")
        return
    }

    res.end(`
        <h1>Ops!</h1>
        <p>We cant seem to find the page that you are looking for</p>
        <a href="/">back home</a>
    `)
    return
})

server.listen(5000)