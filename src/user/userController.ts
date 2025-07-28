import  { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel"; 
import  bcrypt from 'bcrypt'
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

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

    try{

    const user = await userModel  .findOne({email:email});

     if(user){
        const error = createHttpError(
        400,
            "USer already exits with this email"
        );
        return next(error);

    }
    } catch(err){
        return next(createHttpError(500,"Error while getting user"));

    }

    
   
    //password --> hash

    const hashedPassword= await bcrypt.hash(password,10);
    try{
        
        let newUser:User;

     newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
    })
}
catch(err){
    return next(createHttpError(500,"Error while creating user"))
}

    //Token generation
    const token = sign({sub: newUser._id}, config.jwtSecret as string,
        {
            expiresIn:'7d',
            algorithm:"HS256"
        });

    // process
    //Response


    res.json({accessToken:token});
};

export {createUser};

