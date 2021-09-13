const { json } = require("body-parser");
var express = require("express");
var mysql = require("mysql");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());
const puerto = 3001; //Puerto usado para base de datos

// CONEXIÓN DE BASE DE DATOS PhpMyAdmin
var conexion = mysql.createConnection({
  host: "localhost", // si no funciona agregar :84
  user: "root",
  password: "",
  database: "altaybaja",
});

// XAMPP URL: http://localhost:84/phpmyadmin/
// PARA LOS POST Y GET DESDE POSTMAN ES: --> localhost:3001/api/empleados/
app.listen(puerto, function () {
  console.log("Servidor en linea en el puerto " + puerto);
});

// PARA LEVANTAR SERVIDOR ES = node app.js
// -------------------------------------------------
app.get("/", function (req, res) {
  res.send("Servidor en linea en el puerto " + puerto);
});

// MOSTRAR TODOS LOS EMPLEADOS
app.get("/api/empleados/", (req, res) => {
  conexion.query("SELECT * FROM empleados;", function (error, filas) {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

// MOSTRAR UN SOLO EMPLEADO POR ID (filtro de informacion comentado en else)
app.get("/api/empleados/:Id", (req, res) => {
  conexion.query(
    "SELECT * FROM empleados WHERE Id = ?;",
    [req.params.Id],
    function (error, fila) {
      if (error) {
        throw error;
      } else {
        res.send(fila);
        // res.send(fila[0].Nombres);
      }
    }
  );
});

// Ingreso de datos a la Base desde la API
app.post("/api/empleados/", (req, res) => {
  let data = {
    Apellido: req.body.Apellido,
    Nombres: req.body.Nombres,
    Jerarquia: req.body.Jerarquia,
    Plaza: req.body.Plaza,
    Legajo: req.body.Legajo,
    CEIC: req.body.CEIC,
    Sexo: req.body.Sexo,
    Unidad: req.body.Unidad,
  };
  let sql = "INSERT INTO empleados SET ?";
  conexion.query(sql, data, function (error, results) {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  });
});

// Editar empleado por ID
app.put("/api/empleados/:Id", (req, res) => {
  let Id = req.params.Id;
  let Apellido = req.body.Apellido;
  let Nombres = req.body.Nombres;
  let Jerarquia = req.body.Jerarquia;
  let Plaza = req.body.Plaza;
  let Legajo = req.body.Legajo;
  let CEIC = req.body.CEIC;
  let Sexo = req.body.Sexo;
  let Unidad = req.body.Unidad;
  let sql =
    "UPDATE empleados SET Apellido = ?, Nombres = ?, Jerarquia = ?, Plaza = ?, Legajo = ?, CEIC = ?, Sexo = ?, Unidad = ? WHERE Id = ?;";
  conexion.query(
    sql,
    [Apellido, Nombres, Jerarquia, Plaza, Legajo, CEIC, Sexo, Unidad, Id],
    function (error, results) {
      if (error) {
        throw error;
      } else {
        res.send(results);
      }
    }
  );
});

//Eliminar empleado por ID
app.delete("/api/empleados/:Id", (req, res) => {
  conexion.query(
    "DELETE FROM empleados WHERE Id = ?",
    [req.params.Id],
    function (error, filas) {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

//  https://www.youtube.com/watch?v=5ksPp5Yver8&list=PLrAw40DbN0l2dg--IB6xTsEQTD1Qb1aBa&index=6

// Prueba de conexion - Mensajes por consola
conexion.connect(function (error) {
  if (error) {
    throw error();
  } else {
    console.log("¡Conexion exitosa a la base de datos!");
  }
});
