import express from "express";
import { userRoutes } from "./routes/user.routes";
import { videosRoutes } from "./routes/videos.routes";
import { config } from "dotenv";


config();
const app = express();


const cors = require('cors');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});






// endpoint - localhost:4000
//middleware - algo que fica no meio (verificar se o usuário está logado/autenticado)

app.use(cors());
app.use(express.json());
app.use("/user" , userRoutes);
app.use("/videos" , videosRoutes);





app.listen(4000);