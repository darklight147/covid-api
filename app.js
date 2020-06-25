const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express()
const path = require("path")
const dotenv = require("dotenv")

// console.log(process.platform);
dotenv.config({
    path: ".example.env"
})
//controllers
const homeControl = require("./controllers/main")
const port = process.env.PORT || 5054

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.listen(port, () => console.log("listening" + " http://localhost:" + port));
app.get("/api", homeControl.index);