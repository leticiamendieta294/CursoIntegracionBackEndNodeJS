import express from "express";
import { logger } from "./middlewares/logger";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";
import reservasRoutes from "./routes/reservas.routes";
import cors from "cors";
import loginRoutes from "./routes/login.routes";
import weatherRoutes from "./routes/weather.routes";
import path from 'path';



const app = express();


app.use(express.json());
app.use(logger);
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Frontend estático (compilado corre desde dist/, el frontend queda un nivel arriba)
app.use(express.static(path.resolve(__dirname, '..', 'frontend')));

app.use('/api', userRoutes);
app.use('/api', reservasRoutes);
app.use('/api', loginRoutes);
app.use('/api', weatherRoutes);

app.use(errorHandler);

app.use(express.static(path.join(__dirname, "../frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});



/*app.listen(3000, ()=>{
    console.log('Servidor');
}*
)*/
