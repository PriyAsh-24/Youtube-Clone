import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searcSlice from "./searcSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        app : appSlice,
        search : searcSlice,
        chat : chatSlice,
    }
});

export default store;