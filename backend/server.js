const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/schools', require('./routes/schoolRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
