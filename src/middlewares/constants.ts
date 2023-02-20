require("dotenv").config()

export const constants = {
    "PORT": process.env.PORT,
    "API_URL": process.env.API_URL || 'http://34.143.136.192:5000/signup',
    "NODE_ENV": process.env.NODE_ENV
}