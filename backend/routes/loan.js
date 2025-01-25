
const express = require("express")
const router = express.Router()
const {isUser} = require("../middlewares/adminMiddleware")
router.post("/",isUser,(request,response)=>{
    response.json({
        message:`loan route hit!`
    })
})

module.exports = router


