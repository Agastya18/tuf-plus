import { Router } from "express";
import { createBanner,getBanner } from "../controllers/bannerController.js";
const router = Router();

router.post("/banner", createBanner);
router.get("/get", getBanner);






export default router;