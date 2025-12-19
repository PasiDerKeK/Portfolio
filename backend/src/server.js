import app from "./app.js";
import secretRoutes from "./routes/secretRoutes.js";
import express from "express";

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use("/api/secret", secretRoutes);

app.listen(PORT, () => {
    console.log(`Backend läuft auf http://localhost:${PORT}`);
});
