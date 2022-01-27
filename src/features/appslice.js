import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     mynotes: [],
   }

export const appSlice = createSlice({
     name: 'note',
     initialState,
     reducers: {
          MyNotes: (state, action) => {
               console.log(action.payload);
               state.mynotes.push(action.payload);
          },
     }
})

export const { MyNotes } = appSlice.actions;

export default appSlice.reducer;