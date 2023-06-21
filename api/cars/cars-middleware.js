const carModel = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  // HOKUS POKUS
  try {
    const isCarExist = await carModel.getById(req.params.id);
  !isCarExist ? res.status(404).json({mesaj : `${req.params.id} kimliğine sahip araba bulunamadı `}): req.existingCar=isCarExist; res.json(isCarExist)
  } catch (error) {
    
    next(error)
  }
  
}

const checkCarPayload = (req, res, next) => {
  // HOKUS POKUS
  try {
  let requiredFields = ["vin","make","model","mileage"];
  let missingRequiredFields = [];
  const carPayload =req.body
  requiredFields.forEach((item) => {
    if(!carPayload[item]){
      missingRequiredFields.push(item);
    }
  })
  //Hocanin Çözümü 
  // for (let i = 0; i < requiredFields.length; i++) {
  //   const item = requiredFields[i];
  //   if(!req.body[item]){
  //     missingRequiredFields.push(item);
  //   }
  // }
  if(missingRequiredFields.length>0){
    res.status(400).json(
      {message:`${missingRequiredFields.toString()} ${missingRequiredFields.length == 1 ? "is":"are"} missing`}
      );
  }else{
    next();
  }
  } catch (error) {
    next(error);
  }
    
}

const checkVinNumberValid = (req, res, next) => {
  // HOKUS POKUS
  try {
    let isVinValid = vinValidator.validate(req.body.vin);
    if(!isVinValid){
      res.status(400).json({message:`vin ${req.body.vin} is invalid`})
    }else{
      next()
    }
  } catch (error) {
    next(error)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // HOKUS POKUS
  try {
    const isVinExist = await carModel.getByVin(req.body.vin)
  if(isVinExist){
    res.status(400).json({message:`vin ${req.body.vin} already exists`})
  }else{
    next();
  } 
  } catch (error) {
   next(error) 
  }
}

module.exports= {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}