const API_BASE_URL = process.env.API_BASE_URL;
const API_URL_STORE = `${API_BASE_URL}/requests/store`;

const HEADERS = {
  'Accept': 'application/json',
}

export async function storeAuthorizationUse(authorizationUse) {
  try {
    const response = await fetch(API_URL_STORE, {
      method: 'POST',
      headers: HEADERS,
      body: authorizationUse,
    });

    if (!response.ok) {
      throw new Error(`Error storing authorization use: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to store authorization use:', error);
    throw error;
  }
}
