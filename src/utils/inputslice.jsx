import { createSlice } from "@reduxjs/toolkit";

const inputslice=createSlice({
    name:"inputdata",
    initialState:{
        inputvalue:"",
    },

    reducers:{
        setInputvalue:(state,action)=>{
            state.inputvalue=action.payload;
        },
    },


});

export const {setInputvalue}=inputslice.actions;
export default inputslice.reducer;