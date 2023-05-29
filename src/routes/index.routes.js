import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import flightsRouter from "./flights.routes.js";
import lodgingRouter from "./lodging.routes.js";

const router = Router();

router.use(citiesRouter);
router.use(flightsRouter);
router.use(lodgingRouter);

export default router;