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

//Exports

module.exports = server
