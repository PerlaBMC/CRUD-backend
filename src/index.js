require ("dotenv"). config ();
//variables de entorno 

// 1. IMPORTACIONES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// 2. MIDDLEWARES
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenidos al API",
    author: process.env.AUTHOR
  });
});

app.use("/peliculas", require("./routes/user.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
});