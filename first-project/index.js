const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Successfully connected port 3000");

})

app.get('/', (req, res) => {
    res.send("<h1>Hello Atik</h1");
})