import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  username: string;
  role: string;
}

export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { login, setUser, setIsAuthenticated, logout } = userSlice.actions;
export default userSlice.reducer;
