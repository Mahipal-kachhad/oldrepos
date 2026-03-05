import { Router } from "express";
import { authenticateUser, registerUser } from "../controllers/userController";

const router = Router();

router.post("/register", registerUser);
router.post("/authenticate", authenticateUser);

export default router;
