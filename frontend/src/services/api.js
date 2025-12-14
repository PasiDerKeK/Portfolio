const isGithubPages = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "/";

// Lokal: Backend nutzen (falls vorhanden). Auf GitHub Pages: statische JSONs.
const API_BASE = isGithubPages ? `${import.meta.env.BASE_URL}data` : "/api";

async function handle(res) {
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json();
}

export function fetchProfile() {
    return fetch(`${API_BASE}/profile.json`).then(handle);
}

export function fetchSkills() {
    return fetch(`${API_BASE}/skills.json`).then(handle);
}

export function fetchProjects() {
    return fetch(`${API_BASE}/projects.json`).then(handle);
}
