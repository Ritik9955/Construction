const express = require('express')
const {db} = require('./db')
const session = require('express-session') 
const passport = require('./passport') 


const port=process.env.PORT ||4321

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'jbdqwbdanbdi9q3yr3gbqxy3gd8dbei',
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session()) 

app.set('view engine','hbs')

app.use('/const',(require('./routes/const').route))
app.use('/signup',(require('./routes/signup').route)) 
app.use('/login',(require('./routes/login').route)) 
app.use('/profile',(require('./routes/profile').route))  
app.get('/',(req,res)=>{
    res.redirect('const') 
})

// app.get('/',(req,res)=>{
//     res.redirect('const') 
// })

// db.sync({alter:true}).then(()=>{ 
//     app.listen(4433,()=>{
//         console.log('http://localhost:4433')
//     })
// })
db.sync({alter:true}).then(()=>{ 
    app.listen(port,()=>{
        console.log('http://localhost:',port)
    })
})

// server.listen(port,()=>{
//     console.log('http://localhost:',port) 
// })

