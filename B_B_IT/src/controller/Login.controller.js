const express = require("express")
const User = require("../model/User.model")
const jwt=require("jsonwebtoken")
const router= express.Router()

const newToken= (user)=>{
    return jwt.sign({user} ,"DEVASHISH")
}


router.post("/",async(req,res)=>{
    try {
        let user= await User.findOne({email:req.body.email}).exec()

        const match= user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send("Email or password wrong")
        }
         
        const Token= newToken(user)
        return res.status(201).send({"message":"user created",user, Token})
    } catch (error) {
         
        return res.status(400).send(error.message)
    }
})

module.exports =router