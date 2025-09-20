import express from "express";
import validateObjectId from "../middleware/validateObjectId.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { createCase, deleteCaseById, getAllCases, getCaseById, updateCaseById } from "../controllers/caseController.js";

const caseRouter = express.Router();

// Only logged-in users can access these routes
caseRouter.post("/", authMiddleware, createCase);
caseRouter.get("/", authMiddleware, getAllCases);
caseRouter.get("/:id", authMiddleware, validateObjectId, getCaseById);
caseRouter.put("/:id", authMiddleware, validateObjectId, updateCaseById);
caseRouter.delete("/:id", authMiddleware, validateObjectId, deleteCaseById);

export default caseRouter;
