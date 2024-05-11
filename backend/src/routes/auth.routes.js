"use strict";

// Se importa el módulo de express
import express from "express";
// Se importa las funciones del controlador
import { login, register, logout } from "../controllers/auth.controller.js";

// Se realiza una instancia de express
const router = express.Router();

// Petición de tipo post para la ruta del login
router.post("/login", login);
// Petición de tipo post para la ruta del register
router.post("/register", register);
// Petición de tipo post para la ruta del logout
router.post("/logout", logout);

export default router;
