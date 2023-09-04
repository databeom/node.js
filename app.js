const express = require("express") //express를 import
const path = require('path')
const app = express()   //새로운 인스턴스 실행?

// console.log(path.resolve(__dirname+ '/views'))
app.set('views', path.resolve(__dirname+ '/views'))
app.set('view engine', 'ejs')

let port = 8000
// app.listen(port,function(data){ // listen : 서버를 띄우는 메서드
    //console.log(data)
    // console.log(`Server is running at http:localhost:${port}`)  //명령창에 console해주는 거? backtip? :
// } ) //call back 처리할 때는 익명함수 씀

app.get('/', (req,res)=>{
    console.log(req.query.name)
    // res.send("<h1>Hello World</h1>")
    return res.render('index.ejs',{name:"안동",sports:["농구","축구","수영"]})
})

app.listen(port,()=>{ // listen : 서버를 띄우는 메서드
    //console.log(data)
    console.log(`Server is running at http:localhost:${port}`)  //명령창에 console해주는 거? backtip? :
} ) //call back 처리할 때는 익명함수 씀