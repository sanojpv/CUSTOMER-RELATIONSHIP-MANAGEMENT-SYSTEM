import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import caseRouter from "./app/router/caseRouter.js";
import authRouter from "./app/router/authRouter.js";
import userRouter from "./app/router/userRouter.js";
import customerRouter from "./app/router/customerRouter.js";

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());

// Routes
app.use("/api/cases", caseRouter);
app.use("/api/auth", authRouter);
app.use("/api/user" , userRouter);
app.use("/api/customer", customerRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));