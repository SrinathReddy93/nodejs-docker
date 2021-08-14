const app = require("express")();

app.get("/",(req, res)=> {
    console.log('Node version is: ' + process.version);
    res.send("Hello from light weight docker container " + process.version);   
});

app.listen(9999, ()=>console.log('Listening on 9999'));