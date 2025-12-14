import profile from "../data/profile.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";

// Damit bleiben deine Pages unverändert (HomePage/ProjectsPage/...)
// und GitHub Pages braucht kein Backend.

export async function fetchProfile() {
    return profile;
}

export async function fetchSkills() {
    return skills;
}

export async function fetchProjects() {
    return projects;
}
