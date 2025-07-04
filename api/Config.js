export const API_BASE_URL = process.env.API_BASE_URL;

const HEADERS = {
    'Accept': 'application/json',
};

const TOKEN_KEY = 'grp_token';

export function getHeaders(includeToken = false) {
    const headers = { ...HEADERS };

    if (includeToken) {
        const token = sessionStorage.getItem(TOKEN_KEY);
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    }

    return headers;
}