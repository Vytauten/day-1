import express from "express";
import * as controller from "../controllers/controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);

//GET paimti visus pratimus
router.get("/", controller.getJobs);

//GET paimti vieną pratimą
router.get("/:id", controller.getJob);

//POST sukurti naują pratimą
router.post("/", controller.createJob);

//PATCH redaguoti vieną prartimą

router.patch("/:id", controller.updateJob);

//DELETE ištrinti vieną pratimą
router.delete("/:id", controller.deleteJob);

export default router;
