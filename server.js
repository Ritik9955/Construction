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

 app.use(express.static('public'));


 app.set('view engine','hbs')
//
// app.use('/const',(require('./routes/const2').route))
 app.use('/signup',(require('./routes/signup').route))
 app.use('/login',(require('./routes/login').route))
 app.use('/profile',(require('./routes/profile').route))
//app.use(express.static('public'));



// app.get('/',(req,res)=>{
//     res.redirect('const')
// })

//
//  db.sync({alter:true}).then(()=>{
//      app.listen(port,()=>{
//          console.log('http://localhost:',port)
//      })
//  })
app.listen(port,()=>{
       console.log('http://localhost:',port)

})


//
//
//
// echo "# bhsgy" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/Ritik9955/bhsgy.gitaa
//     git push -u origin master
// https://github.com/Ritik9955/Construction