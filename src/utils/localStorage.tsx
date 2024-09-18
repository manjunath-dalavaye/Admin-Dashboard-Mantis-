const LOCAL_STORAGE_KEY = 'userData';
// Save user data (name and login status) to localStorage
export const saveUserToLocalStorage = (name: string, isLoggedIn: boolean) => {
  const userData = { name, isLoggedIn };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
};

// Load user data from localStorage
export const loadUserFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

// Remove user data from localStorage
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
