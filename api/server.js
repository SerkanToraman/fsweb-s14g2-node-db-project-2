// SİHRİNİZİ GÖSTERİN
//Imports
const express = require("express")
const server = express()
const carRoutes = require('./cars/cars-router')

//Middlewares
server.use(express.json());
//Routes
server.use("/api/cars",carRoutes);
//Errors
server.use((err, req, res, next) => {
  res.status((err.status || 500)).json({
    customMessage:"Global error handler üzerinde hata oluştu",
    message:err.message
  })
})
//Exports

module.exports = server
