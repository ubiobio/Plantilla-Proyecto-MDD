"use strict";
// Importa el modulo 'express' para crear las rutas
import { Router } from "express";

/** Controlador de usuarios */
import {getUser, getUsers, updateUser, deleteUser} from "../controllers/user.controller.js";

/** Middlewares de autorización */
import { isAdmin } from "../middlewares/auth.middleware.js";

// Se realiza una instancia de express
const router = Router();

// Define las rutas para los usuarios
router.get("/", isAdmin, getUsers);
router.get("/1", isAdmin, getUser);
router.put("/", isAdmin, updateUser);
router.delete("/", isAdmin, deleteUser);

export default router;