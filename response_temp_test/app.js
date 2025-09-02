const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files ()
// Middleware is a function that sits between the request from the client and the respomse from the server
// think of it as a gatekeeper or pipelin ever request passes through a chain of middlewre functions before reaching the final route
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get((req, res)=>{
    res.sendFile(path.join(__dirname, 'public','404.html'))
})

app.listen(5000,()=>{console.log(`Server is running on http://localhost:5000`)})