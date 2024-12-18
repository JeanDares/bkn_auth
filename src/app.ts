import express from "express";
import authRoutes from "./routes/authRoutes";
import "dotenv/config";

require("dotenv").config();

const app: express.Application = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT: number | string = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
