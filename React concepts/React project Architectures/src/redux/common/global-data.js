// actions.js

import { createSlice } from '@reduxjs/toolkit';

// Action creator
export const setDataAction = (data) => ({
  type: 'data/setData',
  payload: data,
});

// Reducer
const initialState = {
  data: null,
};

const globelData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = globelData.actions;

export default globelData.reducer;
