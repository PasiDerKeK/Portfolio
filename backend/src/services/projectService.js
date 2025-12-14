import { loadJson } from "./dataService.js";

export function loadProjects() {
    return loadJson("projects.json");
}
