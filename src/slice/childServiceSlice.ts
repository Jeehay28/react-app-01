import { createSlice } from "@reduxjs/toolkit";
import { listOfChildService } from "../thunk/childService";
import { PayloadAction } from "@reduxjs/toolkit";

interface childServiceSliceState {
    childService: {[key: string] : any} | null;
    loading : boolean;
    error :  any | null;
}

const initialState: childServiceSliceState = {
    childService : null,
    loading : false,
    error : null
}

const childServiceSlice = createSlice({
    name: 'childService',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(listOfChildService.pending, (state, action: PayloadAction<any>) => {
          state.loading = true;
         
        })
        .addCase(listOfChildService.fulfilled, (state, action) => {
          state.loading = false;
          state.childService = action.payload.response.body;
        })
        .addCase(listOfChildService.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.body;
        });
    },
  });
  
  // Export the reducer to be used in the store
  export default childServiceSlice.reducer;