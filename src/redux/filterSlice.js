import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterSearch: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions; 
export const filterReducer = filterSlice.reducer;