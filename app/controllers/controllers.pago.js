import { pool } from "../config/mysql.db";

export const mostrarPago = async (req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR();`);
        res.json({"Respuesta": respuesta })
    } catch (error) {
        res.json({"error": error})
    }
};

export const crearPago = async (req, res) => {
    const id = req.params.id
    const tipo = req.params.tipo
    try {
        const respuesta = await pool.query(`CALL SP_CREAR(${id}, ${tipo});`);
        res.json({"Respuesta": respuesta })
    } catch (error) {
        res.json({"error": error})
    }
};

export const modificarPago = async (req, res) => {
    const id = req.params.id
    const tipo = req.params.tipo
     try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR(${id}, ${tipo});`);
        res.json({"Respuesta": respuesta })
    } catch (error) {
        res.json({"error": error})
    }
};

export const eliminarPago = async (req, res) => {
    const id = req.params.id
     try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR(${id});`);
        res.json({"Respuesta": respuesta })
    } catch (error) {
        res.json({"error": error})
    }
};

