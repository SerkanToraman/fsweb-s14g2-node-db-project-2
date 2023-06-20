const carModel = require('./cars-model')

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
  
}

const checkVinNumberValid = (req, res, next) => {
  // HOKUS POKUS
}

const checkVinNumberUnique = (req, res, next) => {
  // HOKUS POKUS
}

module.exports= {
  checkCarId,
}