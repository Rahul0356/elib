import  { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel"; 

const  createUser= async(
    req:Request,

    res:Response,

    next:NextFunction

)=>{
    const {name,email,password} = req.body;
    return res.json({});
    



    // validation
    if(!name || !email || !password){
        const error = createHttpError(400,)
        return res.json({message:"All fields are required"});
        return next(error);
    }
    //Database
    const user = await userModel  .findOne({email:email});
    if(user){
        const error = createHttpError(400,"USer already exits with this email");
        return next(error);
        
    }
    // process
    //Response


    res.json({message:"User created"})
};

export {createUser};

