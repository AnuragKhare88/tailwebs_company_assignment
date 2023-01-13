const express = require('express')
const mongoose = require('mongoose')
const route = require("./routes/route")
const app = express()

app.use(express.json())


mongoose.connect("mongodb+srv://anurag:jhansi112233@my-cluster.cummqwt.mongodb.net/tailwebs-cmpny-asign",
{useNewUrlParser: true})
.then( ()=> console.log("MongoDB is connected"))
.catch((err)=> console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function(){
    console.log("Express app is running on port " + (process.env.PORT || 3000))
})

