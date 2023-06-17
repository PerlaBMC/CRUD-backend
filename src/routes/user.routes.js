const { Router } = require("express");
const {
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", obtenerPelicula);

router.post("/", crearPelicula);

router.put("/:id", actualizarPelicula);

router.delete("/:id", eliminarPelicula);

module.exports = router;