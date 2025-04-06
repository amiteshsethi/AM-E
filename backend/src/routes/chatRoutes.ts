import { Router } from "express";
import { verifyToken } from "../utils/tokenManager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompleteion } from "../controllers/chatController.js";

const chatRoutes = Router();

chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompleteion
);

export default chatRoutes;
