import { loadJson } from "./dataService.js";

export function loadSkills() {
    return loadJson("skills.json");
}
