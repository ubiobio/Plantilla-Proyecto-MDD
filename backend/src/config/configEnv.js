"use strict";

// Importa la función fileURLToPath desde el módulo url
import { fileURLToPath } from "url";
// Importa el módulo path
import path from "path";
// Importa el módulo dotenv
import dotenv from "dotenv";

// Obtiene la ruta del archivo actual
const _filename = fileURLToPath(import.meta.url);

// Obtiene el directorio padre de la ruta del archivo actual
const _dirname = path.dirname(_filename);

// Crea la ruta completa del archivo .env
const envFilePath = path.resolve(_dirname, ".env");

// Carga las variables de entorno desde el archivo .env
dotenv.config({ path: envFilePath });

// Exporta la variable de entorno HOST
export const HOST = process.env.HOST;
// Exporta la variable de entorno PORT
export const PORT = process.env.PORT;
// Exporta la variable de entorno DB_URL
export const DB_URL = process.env.DB_URL;
// Exporta la variable de entorno PASS_SECRET
export const PASS_SECRET = process.env.PASS_SECRET;