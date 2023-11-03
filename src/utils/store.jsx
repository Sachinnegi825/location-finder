import { configureStore } from "@reduxjs/toolkit";
import inputslice from "./inputslice";


const store=configureStore({
    reducer:{
            inputdata:inputslice,
    }
});
export default store;