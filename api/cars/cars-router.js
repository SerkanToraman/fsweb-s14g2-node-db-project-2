// HOKUS POKUS
//Imports
const router = require('express').Router()
const carsModel = require('./cars-model')
//MiddleWares

//Routes
//check if "Serkan" is sent to check in postman
router.get('/',(req,res)=>{
    res.send("Serkan")
  })

//Errors

//Exports

module.exports = router;