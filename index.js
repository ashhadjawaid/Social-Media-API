const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require('morgan')
const userRoute = require("./Routes/users.js")
const authRoute = require("./Routes/auth.js")
const postRoute = require("./Routes/post.js")

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},)
.then(() => console.log("Connected to DB Successfully"))
.catch((err) =>{console.error(err);})

//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

app.listen(8000,() =>{
    console.log("Backend Server is running");
})