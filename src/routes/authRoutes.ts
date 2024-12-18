// src/routes/authRoutes.ts
import { Router } from "express";
import { register, login, getProfile } from "../controllers/authController";
import authenticateToken from "../middleware/authenticateToken";
import { validateResetRequest } from "../middleware/validateResetRequest";
import { forgotPassword } from "../controllers/forgotPassword";
import { resetPassword } from "../controllers/resetPassword";
import { validatePasswordReset } from "../middleware/validatePasswordReset";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticateToken, getProfile);
router.post("/forgot-password", validateResetRequest, forgotPassword);
router.post("/reset-password", validatePasswordReset, resetPassword);

export default router;
