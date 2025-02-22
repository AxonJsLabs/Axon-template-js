import { Router } from "@axonlabs/core";

import sampleController from "../controllers/sample.controller.js";
import sampleMiddleware from "../middlewares/sample.middleware.js";

const router = Router();

router
  .get("/", sampleController.helloWorld)
  .middleware(sampleMiddleware.helloWorld);

export default router;