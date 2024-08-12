import { Router } from "express";
import { createBanner,getBanner,createToggleBanner } from "../controllers/bannerController.js";
const router = Router();

router.post("/banner", createBanner);
router.get("/get", getBanner);
router.post("/toggle", createToggleBanner);






export default router;