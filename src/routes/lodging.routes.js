import { Router } from "express";
import { getLodging, lodgingById } from "../controllers/lodging.controllers.js";

const lodgingRouter = Router()

lodgingRouter.get("/lodging/:idCity", getLodging)
lodgingRouter.post("/lodging/:id", lodgingById)

export default lodgingRouter;