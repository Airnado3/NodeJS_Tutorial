const http = require('http');

const server = http.createServer((req, res) => {
    //conditional Rendering
    if(req.url === '/') {
        res.end('Welcome to the home page');
    }
    else if(req.url === '/about'){
        res.end("there is not a thing to know about me");
    }
    else{
        res.end('Life not found:Get good at coding');
    }
})

server.listen(5000,()=>{
    console.log(`listning on http://localhost:${5000}`);
});
