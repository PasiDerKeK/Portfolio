// backend/src/routes/secretRoutes.js
import express from "express";
import codes from "../data/secretCodes.json" with { type: "json" };

const router = express.Router();

router.post("/check-code", (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.json({ success: false });
    }

    const message = codes[code.trim()];

    if (message) {
        return res.json({
            success: true,
            message
        });
    }

    return res.json({ success: false });
});

export default router;
