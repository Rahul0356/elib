import express from 'express'




const bookRouter = express.Router()





//Routes
bookRouter.post("/register",createBook);
bookRouter.post("/login",loginUser)


export default userRouter;
