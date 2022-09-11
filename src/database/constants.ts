require('dotenv').config()

// APP constants
const PORT = process.env.PORT

// DB Constants
const DB = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  NAME: process.env.DB_NAME,
  PASSWORD: process.env.DB_PASSWORD
}

// JWT
const SECRET_KEY = process.env.SECRET_KEY

module.exports = { DB, PORT, SECRET_KEY }
