import { createSlice } from "@reduxjs/toolkit";

const userInitialState = { userInfo: null };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserInfor(state, action) {
      state.userInfo = action.payload;
    },
    resetuserInfo(state, action) {
      state.userInfo = null
    }
  },
});

const userActions = userSlice.actions;
const userReducers = userSlice.reducer;

export { userActions, userReducers };
