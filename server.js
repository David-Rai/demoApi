const express=require('express')
const dotenv=require('dotenv')
dotenv.config()


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const router=require('./routes/users.js')

//routers 
app.use(router)


const port=process.env.PORT || 1111
app.listen(port,console.log("server started..."))