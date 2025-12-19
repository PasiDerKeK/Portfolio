import profile from "../data/profile.json";
import skills from "../data/skills.json";
import projects from "../data/projects.json";

// Damit bleiben die Pages unverändert (HomePage/ProjectsPage/...)

export async function fetchProfile() {
    return profile;
}

export async function fetchSkills() {
    return skills;
}

export async function fetchProjects() {
    return projects;
}

export async function checkSecretCode(code) {
    const res = await fetch("/api/secret/check-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    });

    return res.json();
}
