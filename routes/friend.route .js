import { Router } from "express";
import { friendRequest, friendsList, pendingRequest } from "../comtrollers/friend.controller.js";

const router = Router();

router.post("/friends/send-request", friendRequest);
router.get("/friends/:id/friend-request-list", pendingRequest);
router.get("/friends/:id/friends-list", friendsList);
router.get("/friends/:id/friends-list", friendsList);

export default router;
