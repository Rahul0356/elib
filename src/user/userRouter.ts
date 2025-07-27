import express from 'express'

import { createUser } from './userController';


const userRouter = express.Router()





//Routes
userRouter.post("/register",(req,res)=>{
    res.json({message:"USer registered"});
});

export default userRouter;
