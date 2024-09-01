import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveUserToLocalStorage, loadUserFromLocalStorage, removeUserFromLocalStorage } from '../utils/localStorage'; // Adjust path as needed

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

// Load initial state from localStorage
const localStorageData = loadUserFromLocalStorage();
const initialStateFromLocalStorage = localStorageData
  ? { email: localStorageData.email, password: localStorageData.password }
  : initialState;

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateFromLocalStorage,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      saveUserToLocalStorage(state.email, true); // Save email and login status to localStorage
    },
    clearUserData: (state) => {
      state.email = '';
      state.password = '';
      removeUserFromLocalStorage(); // Clear from localStorage
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
