const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("Successfully connected port 3000");

})

app.set('view engine', 'ejs')

app.use(express.json())

app.get('/', (req, res) => {
    const users=[
        {id:1, name: 'Salman'},
        {id: 2, name: 'Akshay'}
    ]
    res.json(users)
})

app.post('/about', (req, res) => {
    res.send(req.body)
})

// app.get('/end', (req, res) => {
//     res.write('This is testing')
//     res.end()

// })

// app.get('/check', (req, res) => {
//     console.log("res.headersSent")
//     res.send("Hello")
//     console.log(res.headersSent)
    

// })

// app.get('/check', (req, res) => {
//     res.set('custom-header', 'hello123')
//     console.log(res.get('custom-header'))
//     res.send("Header Set")
    

// })