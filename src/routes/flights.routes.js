import { Router } from "express";
import { flightById, getFlights } from "../controllers/flights.controllers.js";

const flightsRouter = Router()

flightsRouter.get("/flights/:idCity", getFlights)
flightsRouter.post("/flights/:id", flightById)

export default flightsRouter;