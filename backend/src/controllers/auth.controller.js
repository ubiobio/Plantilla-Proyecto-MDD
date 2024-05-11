"use strict";
// Importa el modelo de datos 'Role'
import Role from "../models/role.model.js";
// Importa el modelo de datos 'User'
import User from "../models/user.model.js";

export async function login(req, res) {
    try {
        const user = req.body;

        const userFound = await User.findOne({ email: user.email })
            .populate("roles")
            .exec();

        if (!userFound) {
            return res.status(400).json({
                message: "El correo electrónico es incorrecto"
            });
        }

        const matchPassword = await User.comparePassword(
            user.password,
            userFound.password
        )
        
        if (!matchPassword) {
            return res.status(400).json({
                message: "La contraseña es incorrecta"
            });
        }

        req.session.user = {
            username: userFound.username,
            rut: userFound.rut,
            email: userFound.email,
            rolName: userFound.roles[0].name
        };

        res.status(200).json({
            message: "Inicio de sesión exitoso!",
            data: req.session.user // Devuelve los datos del usuario en la sesión
        });

    } catch (error) {
        console.log("Error en auth.controller.js -> login(): ", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export async function register(req, res) {
    try {
        const userData = req.body;

        const existingUser = await User.findOne({ email: userData.email });
         // Verificar si el correo electrónico ya está en uso
        if (existingUser) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado." });
        }

        // Obtener los ObjectIds de los roles definidos en la constante ROLES
        const roles = await Role.find({ name: { $in: userData.roles } });
        if (!roles || roles.length === 0) {
            return res.status(400).json({ message: "Roles no válidos." });
        }

        // Crear un nuevo usuario con los roles obtenidos
        const newUser = new User({
            username: userData.username,
            email: userData.email,
            rut: userData.rut,
            password: await User.encryptPassword(userData.password),
            roles: roles.map(role => role._id) // Mapear los ObjectIds de los roles
        });
        await newUser.save();

        res.status(201).json({ 
            message: "Usuario registrado exitosamente",
            data: newUser
        });
    } catch (error) {
        console.log("Error en auth.controller.js -> register():", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
}

export const logout = (req, res) => {
    try {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    console.log("Error al cerrar sesión:", err);
                    res.status(500).json({ message: "Error al cerrar la sesión" });
                } else {
                    res.clearCookie('miCookie'); // Limpiar la cookie de sesión
                    res.status(200).json({ message: "Sesión cerrada exitosamente" });
                }
            });
        } else {
            res.status(200).json({ message: "No hay ninguna sesión activa para cerrar" });
        }
    } catch (error) {
        console.log("Error en auth.controller.js -> logout():", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
