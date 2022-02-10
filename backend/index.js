// librerias para el servidor
import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
// para que el archivo .env quede disponible para todo el proyecto
dotenv.config();
// app es el nombre de nuestro backend
//  app es nuestro servidor
const app = express();
app.use(express.json());
app.use(cors());
// Comunicacion con windows
app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
);
db.dbConnection();