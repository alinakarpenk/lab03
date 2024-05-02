const express = require('express')
const userRoutes = require('../routers/userRoutes')
const mongoose = require('mongoose')
require('dotenv').config();

const PORT = process.env.PORT || 3000
const URL = process.env.MONGO_URL
const app = express()


app.get('/task-manager', async (req, res) => {
  res.status(200).send("Main page");
});

app.use(express.json()) 
app.use("/task-manager", userRoutes)
// mongoose.connect(URL)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
  

