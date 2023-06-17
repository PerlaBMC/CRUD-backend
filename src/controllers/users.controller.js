const { peliculas } = require("../database/db");
const { v4: uuid } = require("uuid");

const obtenerPelicula = (req, res) => {
  return res.json({
    ok: true,
    msg: "Peliculas obtenidos",
    data: peliculas,
  });
};

const crearPelicula= (req, res) => {
  const { id, tittle, year, price } = req.body;

  const pelicula = {
    id: uuid(),
    tittle: tittle,
    year: year,
    price: price
  };

 peliculas.push(pelicula);

  return res.json({
    ok: true,
    msg: "Pelicula creado",
    data: peliculas,
  });
};

const actualizarPelicula = (req, res) => {
  const { id } = req.params;
  const { tittle, year, price} = req.body;

  const pelicula = peliculas.find((pelicula) => pelicula.id === id);

  pelicula.tittle = tittle;
  pelicula.year= year;
  pelicula.price=price;

  return res.json({
    ok: true,
    msg: "Pelicula actualizado",
    data: pelicula,
  });
};

const eliminarPelicula = (req, res) => {
  const { id } = req.params;

  const pelicula = peliculas.find((pelicula) => pelicula.id === id);
  const index = peliculas.indexOf(pelicula);
  peliculas.splice(index, 1);

  return res.json({
    ok: true,
    msg: "Pelicula eliminado",
    data: pelicula,
  });
};

module.exports = {
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
};