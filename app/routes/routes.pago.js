import { Router } from "express";

const rutaPago = Router();

rutaPago.get("/pago", () => {console.log("Probando");});
rutaPago.post("/pago", () => {console.log("Probando");});
rutaPago.put("/pago", () => {console.log("Probando");});
rutaPago.delete("/pago:id", () => {console.log("Probando");});

export default rutaPago;