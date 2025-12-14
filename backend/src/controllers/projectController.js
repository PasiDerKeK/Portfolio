import { loadProjects } from "../services/projectService.js";

export function getProjects(req, res) {
    const projects = loadProjects();
    res.json(projects);
}
