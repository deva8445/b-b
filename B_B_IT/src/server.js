const connect = require("./configs/db")
const app= require("./index")
app.listen(4000,async(req,res)=>{
    try {
        
        await connect()
        console.log("http://localhost:4000")
    } catch (error) {
        console.log(error)
    }
})