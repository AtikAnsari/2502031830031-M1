import express from 'express'
const app= express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res) =>{
    res.send("Home Page")

})

app.get('/about',(req, res) =>{
    var users = [
        {name: 'Atik Ansari', age: 21, city:'Ahmedabad'},
        {name: 'Shaikh Sakib', age: 22, city: 'Surat'},
        {name: 'Shaikh Noman', age: 24, city: 'Navsari'},
        {name: 'Shaikh Sejan', age: 23, city: 'Mumbai'},
        {name: 'sahil  Shaikh', age: 22, city: 'Delhi'}
    ];

    res.render("about",{
                            title:'home page',
                            message:"WElcome",
                            items:users
                            
                        })

})

app.get('/form',(req, res)=>{
    res.render('form')

})

app.post('/submit',(req, res)=>{
   const name= req.body.myname

const message = 'Hello, ${name} You Submitted the Form.'
   res.send(message) 
})

app.listen(3000,()=>{
    console.log("Server started successfully on port 3000")
})