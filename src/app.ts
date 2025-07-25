import express from 'express';



const app = express();

//Routes

//Http methods:GET,POST,PUT,DELETE

app.get("/",(req, res,next) => {
    res.json({message:"Welcome to elib api"});
    });


export default app;
