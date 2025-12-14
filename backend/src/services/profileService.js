import { loadJson } from "./dataService.js";

export function loadProfile() {
    return loadJson("profile.json");
}
