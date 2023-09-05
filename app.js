const express = require("express") //express를 import
const mongoose = require("mongoose")
const path = require('path')
const apiRouter = require('./routes/routing')
const app = express()   //새로운 인스턴스 실행?

// Connect to MongoDB
mongoose.connect("mongodb+srv://root:1234@cluster0.yrij7xu.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// console.log(path.resolve(__dirname+ '/views'))
// set : 초기설정 메서드
app.set('views', path.resolve(__dirname+ '/views'))
app.set('view engine', 'ejs')


// use : 미들웨어를 등록하는 메서드 
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',apiRouter)

let port = 8000
// app.listen(port,function(data){ // listen : 서버를 띄우는 메서드
    //console.log(data)
    // console.log(`Server is running at http:localhost:${port}`)  //명령창에 console해주는 거? backtip? :
// } ) //call back 처리할 때는 익명함수 씀

// app.get('/', (req,res)=>{
//     console.log(req.query.name)
//     // res.send("<h1>Hello World</h1>")
//     return res.render('index.ejs',{name:"안동",sports:["농구","축구","수영"]})
// })

app.get('/',(req , res)=>{
    return res.render('index')
})

app.listen(port,()=>{ // listen : 서버를 띄우는 메서드
    //console.log(data)
    console.log(`Server is running at http:localhost:${port}`)  //명령창에 console해주는 거? backtip? :
} ) //call back 처리할 때는 익명함수 씀
