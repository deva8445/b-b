const express = require("express")
const User = require("../model/User.model")
const authenticate= require("../middleware/authenticate")
const router= express.Router()

router.get("/",authenticate,async(req,res)=>{
    try {
        
        if(req.user.role!="admin"){
            return res.status(401).send("You are not authorized for the data")
        }
        const user= await User.find().lean().exec()
        return res.status(201).send({user})
    } catch (error) {
        if(error.code===11000){
            return res.status(500).send("User created, please log in")
        }
        return res.status(400).send(error.message)
    }
})

module.exports =router