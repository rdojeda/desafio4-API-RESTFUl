const express = require("express");
const morgan = require("morgan");
const routeProductos = require("./routes/routeProductos.js");

const app = express();
//settings
app.set("port", process.env.PORT || 8000);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

//Routes
app.use("/api/productos", routeProductos);

// Starting the server
try {
  app.listen(app.get("port"), () => {
    console.log(`Server escuchando en puerto ${app.get("port")}`);
  });
} catch (err) {
  console.error("Error de conexión en server...", err);
}
