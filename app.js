const express = require("express")
const app = express()
const connectDB = require("./connection/mongoConnection")
const cors = require("cors")
const morgan = require("morgan")
const colors = require('colors')
const dotenv = require("dotenv")
const bodyParser = require("body-parser");


dotenv.config({path:"/.env"})
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()
const hostname = 'localhost';
const port = process.env.PORT || 3000
app.listen(port,hostname , () => console.log(`server starting http://${hostname}:${port}/`.yellow))



app.use("/" , (req,res) => {
    res.send("hello mallu call users");
});