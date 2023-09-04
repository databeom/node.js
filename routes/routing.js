const express = require('express')

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

module.exports = router 