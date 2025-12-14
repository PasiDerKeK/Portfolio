import { loadProfile } from "../services/profileService.js";

export function getProfile(req, res) {
    const profile = loadProfile();
    res.json(profile);
}
