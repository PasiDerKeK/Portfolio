import { loadSkills } from "../services/skillsService.js";

export function getSkills(req, res) {
    const skills = loadSkills();
    res.json(skills);
}
