import { Router } from "express";
import { actualizarReserva, borrarReserva, crearReserva, getReservas } from "../controllers/reservas.controllers";


const router = Router();
router.post("/reserva", crearReserva);
router.get("/reserva", getReservas);
router.put("/reserva/:id", actualizarReserva);
router.delete("/reserva/:id", borrarReserva );
export default router;
