const route = require('express').Router()
const passport = require('passport')

route.get('/',(req,res)=>{
    res.render('const2');

    // res.use('public')
})

// route.post('/',
//     passport.authenticate('local',{
//         successRedirect:'/profile',
//         failureRedirect:'/login'
//     })
// )

// route.get('/facebook',
//     passport.authenticate('facebook')
// )

// route.get('/facebook/callback',
//     passport.authenticate('facebook',{
//         successRedirect:'/profile',
//         failureRedirect:'/login'
//     })
// )

module.exports = {
    route
}