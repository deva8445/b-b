const express = require("express")
const User = require("../model/User.model")

const router= express.Router()

router.post("/",async(req,res)=>{
    try {
        const user= await User.create(req.body)
        return res.status(201).send({"message":"user created",user})
    } catch (error) {
        if(error.code===11000){
            return res.status(500).send("User created, please log in")
        }
        return res.status(400).send(error.message)
    }
})

module.exports =router