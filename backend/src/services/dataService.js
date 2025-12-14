import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, "..", "data");

export function loadJson(fileName) {
    const filePath = path.join(dataDir, fileName);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
}
