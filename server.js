const express =require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const adminRoute = require('./routes/adminRoute')
const userRoute = require('./routes/userRoute')
require('dotenv').config()
app.use(express.json())
const dbConfig = require('./config/dbConfig')
app.use('/api/user',userRoute)
app.use('/api/admin',adminRoute)

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`node server started at port ${port}`))