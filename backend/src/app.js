import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profileRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/profile", profileRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectRoutes);

export default app;
