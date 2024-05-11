"use strict"; 
// Importa la función 'connect' de la biblioteca 'mongoose', que se utiliza para conectar a la base de datos MongoDB.
import {connect} from "mongoose";
// Importa la URL de la base de datos desde el archivo 'configEnv.js'.
import { DB_URL } from "./configEnv.js";

/**
 * Conexión a la base de datos.
 * @async Indica que esta función es asíncrona
 * @function connectDB Nombre de la función que establece la conexión con la base de datos.
 */

export async function connectDB() { 
    try { 
        await connect(DB_URL); 
        console.log("Base de datos conectada exitosamente!"); 
    } catch (error) {
        console.log("Error en configDB.js -> connectDB(): ", error);
    }
}