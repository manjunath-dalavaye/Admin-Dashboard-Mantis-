// // const LOCAL_STORAGE_KEY = 'userData';

// // // Save data to localStorage
// // export const saveToLocalStorage = (data: any) => {
// //   try {
// //     const serializedData = JSON.stringify(data);
// //     localStorage.setItem(LOCAL_STORAGE_KEY, serializedData);
// //   } catch (err) {
// //     console.error('Could not save data to localStorage:', err);
// //   }
// // };

// // // Load data from localStorage
// // export const loadFromLocalStorage = () => {
// //   try {
// //     const serializedData = localStorage.getItem(LOCAL_STORAGE_KEY);
// //     if (serializedData === null) {
// //       return undefined;
// //     }
// //     return JSON.parse(serializedData);
// //   } catch (err) {
// //     console.error('Could not load data from localStorage:', err);
// //     return undefined;
// //   }
// // };

// // // Remove data from localStorage
// // export const removeFromLocalStorage = () => {
// //   try {
// //     localStorage.removeItem(LOCAL_STORAGE_KEY);
// //   } catch (err) {
// //     console.error('Could not remove data from localStorage:', err);
// //   }
// // };

// // src/utils/localStorage.ts

// const LOCAL_STORAGE_KEY = 'userData';

// // Save data to localStorage
// export const saveToLocalStorage = (data: any) => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
// };

// // Load data from localStorage
// export const loadFromLocalStorage = () => {
//   const data = localStorage.getItem(LOCAL_STORAGE_KEY);
//   return data ? JSON.parse(data) : null;
// };

// // Remove data from localStorage
// export const removeFromLocalStorage = () => {
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
// };

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
