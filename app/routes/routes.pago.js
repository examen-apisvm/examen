import { Router } from "express";
import { crearPago, eliminarPago, modificarPago, mostrarPago } from "../controllers/controllers.pago";

const rutaPago = Router();

rutaPago.get("/pago", mostrarPago);
rutaPago.post("/pago", crearPago);
rutaPago.put("/pago", modificarPago);
rutaPago.delete("/pago:id", eliminarPago);

export default rutaPago;