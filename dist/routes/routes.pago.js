"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.pago");
var rutaPago = (0, _express.Router)();
rutaPago.get("/pago", _controllers.mostrarPago);
rutaPago.post("/pago", _controllers.crearPago);
rutaPago.put("/pago", _controllers.modificarPago);
rutaPago["delete"]("/pago:id", _controllers.eliminarPago);
var _default = exports["default"] = rutaPago;