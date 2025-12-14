// frontend/src/services/api.js

function isDev() {
    return import.meta.env.DEV;
}

// In DEV: Backend via Proxy (/api -> localhost:4000)
// In PROD (GitHub Pages): statische Dateien aus /data/...
const API_BASE = isDev()
    ? "/api"
    : `${import.meta.env.BASE_URL}data`;

async function getJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json();
}

export function fetchProfile() {
    return isDev()
        ? getJson(`${API_BASE}/profile`)
        : getJson(`${API_BASE}/profile.json`);
}

export function fetchSkills() {
    return isDev()
        ? getJson(`${API_BASE}/skills`)
        : getJson(`${API_BASE}/skills.json`);
}

export function fetchProjects() {
    return isDev()
        ? getJson(`${API_BASE}/projects`)
        : getJson(`${API_BASE}/projects.json`);
}
