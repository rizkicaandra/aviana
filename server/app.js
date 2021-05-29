if(process.env.NODE_ENV == 'development'){
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const fileUpload = require('express-fileupload')
const app = express()
const PORT = process.env.PORT || 4000

// cors : izin untuk client mengakses server
app.use(cors())

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// file upload
app.use(fileUpload())

// routes
app.use('/', routes)

// // error handler 
app.use(errorHandler)
  
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})