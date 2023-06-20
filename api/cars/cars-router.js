// HOKUS POKUS
//Imports
const router = require('express').Router()
const carsModel = require('./cars-model')
//MiddleWares
const mw = require('./cars-middleware')
//Routes
// //check if "Serkan" is sent to check in postman
// router.get('/',(req,res)=>{
//     res.send("Serkan")
//   })

router.get('/',async (req,res,next)=>{
  try {
    const allCars = await carsModel.getAll();
    res.json(allCars);
  } catch (error) {
    next(error);
  }
})

router.get('/:id',mw.checkCarId,(req,res,next)=>{
  try {
    res.json(req.existingCar)
    
  } catch (error) {
    next(error)
  }


})

router.post('/',async (req,res,next)=>{
  try {
    const insertedCar = await carsModel.create(req.body)
    res.status(201).json(insertedCar);  
  } catch (error) {
    next(error)
  }
})
//Errors

//Exports

module.exports = router;