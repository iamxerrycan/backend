import express from 'express'
import dotenv from 'dotenv'

const app = express();
const PORT = 4000;

dotenv.config()

app.get('/',(req,res)=>{
    res.send("hellonode")
})

app.get('/insta',(req,res)=>{
    res.send('<h1>kittua</h1>')
})

app.get('/something', (req,res)=>{
    res.send(`<h1>html in chrome !</h1>`)
})

app.listen(process.env.PORT ,()=>{
    console.log(`linstening at ${PORT}`);
})