const express=require('express')
const bodyParser=require('body-parser')
const database=require('./src/Config/Configure')
const router=require('./src/Router/Router')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended: true
}))
app.use(cors())
app.use(router);
app.listen(3000,()=>{
    console.log("server connected - 3000")
})