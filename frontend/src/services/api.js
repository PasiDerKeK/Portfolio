const BASE_URL = "/api";

async function handle(res) {
    const text = await res.text();
    if (!res.ok) {
        throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
    }
    try {
        return JSON.parse(text);
    } catch {
        throw new Error(`Antwort ist kein JSON: ${text}`);
    }
}

export function fetchProfile() {
    return fetch(`${BASE_URL}/profile`).then(handle);
}

export function fetchSkills() {
    return fetch(`${BASE_URL}/skills`).then(handle);
}

export function fetchProjects() {
    return fetch(`${BASE_URL}/projects`).then(handle);
}
