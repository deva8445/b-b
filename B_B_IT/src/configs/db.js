const mongoose= require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://deva8445:jaimatadi@cluster0.braptif.mongodb.net/beyond_IT")
}