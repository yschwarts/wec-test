const express = require("express");
const app = express();
const productrouter = require("./api/v1/routes/product");
const categoryrouter = require("./api/v1//routes/category");
const secure = require('./api/v1/middle/secure')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use("/product", productrouter);
app.use("/category", categoryrouter);

app.all("*", (req, res)=> {
    res.status(200)
    res.json({msg:"test"})
})

app.use(secure)

module.exports = app