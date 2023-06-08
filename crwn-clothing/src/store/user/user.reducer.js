import { createSlice } from "@reduxjs/toolkit";

import { USER_ACTION_TYPES } from "./user.types";

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name:'user',
  initialState: USER_INITIAL_STATE,
  reducers:{
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;