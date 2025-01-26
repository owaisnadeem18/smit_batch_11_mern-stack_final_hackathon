
const express = require("express")
const router = express.Router()
const {isAdmin} = require("../middlewares/adminMiddleware")

router.get("/",isAdmin,(request,response)=>{
response.json({
    message:`admin route hit!`
})
})

