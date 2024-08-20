import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
}

const initialState: SignupState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  password: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSignupData: (state, action: PayloadAction<SignupState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSignupData } = signupSlice.actions;
export default signupSlice.reducer;
