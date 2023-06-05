const {
    getAll,
    create,
    getOne,
    remove,
    update,
} = require("../controllers/user.controllers");
const express = require("express");

const userRouter = express.Router();

userRouter
    .route("/")
    .get(getAll) // Leer
    .post(create); // Crear

userRouter
    .route("/:id") // Parametro
    .get(getOne) // Leer con parametro
    .delete(remove) // Eliminar
    .put(update); // Actualizar

module.exports = userRouter;
