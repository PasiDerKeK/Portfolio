async function handle(res) {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// GitHub Pages served Dateien aus /public direkt unter /
export function fetchProfile() {
    return fetch("/data/profile.json").then(handle);
}
export function fetchSkills() {
    return fetch("/data/skills.json").then(handle);
}
export function fetchProjects() {
    return fetch("/data/projects.json").then(handle);
}
