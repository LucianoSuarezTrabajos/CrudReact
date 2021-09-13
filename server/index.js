// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// const mysql = require("mysql");
// import "bootstrap/dist/css/bootstrap.css";

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "123456Luciano",
//   database: "cruddatabase",
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/insert", (req, res) => {
//   // const idusuario = req.body.idusuarios;
//   const nombreusuario = req.body.nombreusuario;
//   const nombre = req.body.nombre;
//   const apellido = req.body.apellido;
//   const contraseña = req.body.contraseña;
//   const correo = req.body.correo;

//   const sqlInsert =
//     "INSERT INTO cruddatabase.usuarios (nombreusuario, nombre, apellido, contraseña, correo) VALUES (?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [nombreusuario, nombre, apellido, contraseña, correo],
//     (err, result) => {
//       console.log(result);
//     }
//   );
// });

// // app.get("/", (req, res) => {
// //   const sqlInsert =
// //     "INSERT INTO usuarios (idusuarios, nombreusuario, nombre, apellido, contraseña, correo) VALUES (NULL, 'Lucianolucho', 'Luciano', 'Suarez', '123456', 'lucianolucho13');";
// //   db.query(sqlInsert, (err, result) => {
// //     res.send("Hola Luciano");
// //   });
// // });

// app.listen(3001, () => {
//   console.log("Server en linea Port:3001 ");
// });
