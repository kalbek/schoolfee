const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = 8000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/schools', require('./routes/schoolRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
