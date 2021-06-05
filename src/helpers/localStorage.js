export function saveAuth(auth) {
  localStorage.setItem('auth', JSON.stringify({ username: auth.username }));
}

export function removeAuth() {
  localStorage.removeItem('auth');
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token') || '';
}
export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function getAuth() {
  return JSON.parse(localStorage.getItem('auth') || '{}');
}

export function saveState(state) {
  localStorage.setItem('STATE', JSON.stringify(state));
}

export function getState() {
  return JSON.parse(localStorage.getItem('STATE') || '{}');
}
