require('dotenv').config()
const express = require('express')
const cors = require('cors')
const ErrorMiddleware = require('./Middlewares/ErrorMiddleware')
const { Error } = require('mongoose')
const UserRouter = require('./Routers/UserRouter')

const PORT = process.env.PORT || 8000
const app = express()




app.use(cors({credentials: true, origin: [process.env.API_GATEWAY_URL, "http://127.0.0.1:5173"]}))
app.use(express.json())

app.use(UserRouter)

app.use(ErrorMiddleware)








app.listen(PORT, () => {console.log(`Listening ${PORT}!`)})