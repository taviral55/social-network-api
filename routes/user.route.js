import { Router } from "express";
import { createAccount, login } from "../controllers/user.controller.js";

const router = Router();

router.post("/user/create-account", createAccount);
router.post("/user/login", login);

export default router;
