// Importa el archivo 'configEnv.js' para cargar las variables de entorno
import { PORT, HOST, PASS_SECRET } from "./config/configEnv.js";
// Importa el módulo 'cors' para agregar los cors
import cors from "cors";
// Importa el módulo 'express' para crear la aplicacion web
import express, { urlencoded, json } from "express";
// Importamos morgan para ver las peticiones que se hacen al servidor
import morgan from "morgan";
// Importa el módulo 'express-session' para la gestión de sesiones
import session from "express-session";
/** El enrutador principal */
import indexRoutes from "./routes/index.routes.js";
// Importa el archivo 'configDB.js' para crear la conexión a la base de datos
import { connectDB } from "./config/configDB.js";
// Importa la funcion para crear roles y usuarios
import { createRoles, createUsers } from "./config/initSetup.js";

/**
 * Inicia el servidor web
*/
async function setupServer() {
  try {
    /** Instancia de la aplicacion */
    const app = express();
    app.disable("x-powered-by");
    
    // Configuración de express-session
    app.use(session({
      name: 'miCookie',
      secret: `${PASS_SECRET}`,
      resave: false,
      saveUninitialized: false,
    }));

    // Agregamos los cors
    app.use(cors({ credentials: true, origin: true }));
    // Agrega el middleware para el manejo de datos en formato URL
    app.use(urlencoded({ extended: true }));
    // Agrega el middleware para el manejo de datos en formato JSON
    app.use(json());
    // Agregamos morgan para ver las peticiones que se hacen al servidor
    app.use(morgan("dev"));
    // Agrega el enrutador principal al servidor
    app.use("/api", indexRoutes);

    // Inicia el servidor en el puerto especificado
    app.listen(PORT, () => {
      console.log(`=> Servidor corriendo en ${HOST}:${PORT}/api`);
    });
  } catch (err) {
    console.log('Error en server.js -> setupAPI(): ', err);
  }
}

/**
 * Inicia la API
*/
async function setupAPI() {
  try {
    // Inicia la conexión a la base de datos
    await connectDB();
    // Inicia el servidor web
    await setupServer();
    // Inicia la creación de los roles
    await createRoles();
    // Inicia la creación del usuario admin y user
    await createUsers();
  } catch (err) {
    console.log('Error en server.js -> setupAPI(): ', err);
  }
}

// Inicia la API
setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((err) => console.log('Error en server.js -> setupAPI(): ', err));