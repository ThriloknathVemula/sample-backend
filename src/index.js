import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.json({message:"Hello world"})
})

app.get('/random-num', (req, res)=>{
    const random = Math.ceil(Math.random()*100)

    return res.json({randomNum:random})
})

