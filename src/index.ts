import express from "express";
import { logger } from "./middlewares/logger";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";
import reservasRoutes from "./routes/reservas.routes";


const app = express();


app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);
app.use('/api', reservasRoutes);
app.use(errorHandler);



app.listen(3000, ()=>{
    console.log('Servidor');
}
)