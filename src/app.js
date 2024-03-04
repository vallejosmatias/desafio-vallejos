import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import handlebars from "express-handlebars"
import cookieParser from "cookie-parser";
import session from "express-session";

import { __dirname } from "./utils.js";
import sessionRouter from "./routes/session.route.js";
import viewsRouter from "./routes/views.route.js";
import initializePassport from "./config/config.js";
import userRouter from "./routes/users.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Conectar a la base de datos MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("data basse connected"))
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));


// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// Rutas
app.use("/", viewsRouter);
app.use("/api/sessions", sessionRouter);
app.use("/user", userRouter);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
