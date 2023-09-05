const express = require('express')
const User = require('../utils/userModel')
const router = express.Router()

router.get('/',(req , res)=>{
    return res.render('index',{name:"안동", action:["수영", "축구", "야구"]})
})

router.get('/register',(req , res)=>{
    return res.render('register')
})

router.get('/login',(req , res)=>{
    return res.render('login')
})

router.post('/register',(req , res)=>{
    console.log(req.body)
    return res.send('입력완료!')
})

router.post('/login',(req , res)=>{
    console.log(req.body)
    return res.send('입력완료!')
})

router.post('/register',(req , res)=>{
    console.log(req.body.name)
    username = req.body.name
    email = req.body.email
    phone = req.body.phone
    password = req.body.password

    const user = new User({
        username : username,
        email : email,
        phone : phone,
        password : password,

    })
    // Document instance method
    user.save()
    .then((result) => console.log(`Saved successfully result : ${result}`))
    .catch(e => console.error(e));
    return res.redirect('/')
})


module.exports = router 