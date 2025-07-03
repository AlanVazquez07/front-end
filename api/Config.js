export const API_BASE_URL = process.env.API_BASE_URL;

const HEADERS = {
    'Accept': 'application/json',
};

export function getHeaders(includeToken = false) {
    const headers = { ...HEADERS }; // Copia de los encabezados base

    if(includeToken) {
        const token = sessionStorage.getItem('grp_token'); // Obtener el token de sessionStorage
        headers['Authorization'] = `Bearer ${token}`; // Agregar el token si es necesario
    }

    return headers;
}