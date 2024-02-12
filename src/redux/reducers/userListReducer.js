import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
export const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList: (state, { payload }) => {
      state.list = payload;
      //console.log("......payload........", payload)
    },
    setEditUser: (state, { payload }) => {
      //const { nationalCode } = payload;
      const updatedList = state.list.map(item => {
        if (item.nationalCode === payload.nationalCode) {
          return payload; // Replace the matching object with the new payload
        } else {
          return item; // Keep the other items as they are
        }
      });
      state.list = updatedList;
    }
  },
});

export const {
  setUsersList,
  setEditUser,
} = usersReducer.actions;
export default usersReducer.reducer;
