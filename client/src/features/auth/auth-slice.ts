

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  refreshUserToken: string | null
}

const initialState: AuthState = {
  token: null,
  refreshUserToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{token:string, refreshToken:string}>) {
      state.token = action.payload.token;
      state.refreshUserToken = action.payload.refreshToken
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
