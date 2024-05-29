import { Router } from "express";

const rutaPago = Router();

rutaPago.get("/pago", () => {console.log("Probando get");});
rutaPago.post("/pago", () => {console.log("Probando post");});
rutaPago.put("/pago", () => {console.log("Probando put");});
rutaPago.delete("/pago:id", () => {console.log("Probando delete");});

export default rutaPago;