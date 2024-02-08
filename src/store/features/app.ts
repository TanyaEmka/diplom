import { createSlice } from "@reduxjs/toolkit";

interface AppState {
    menuVisible: boolean,
}

const initialState: AppState = {
    menuVisible: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeMenuVisible(state) {
            state.menuVisible = !state.menuVisible;
        },
        showMenu(state) {
            state.menuVisible = true;
        },
        hiddenMenu(state) {
            state.menuVisible = false;
        }
    }
});

export const { 
    changeMenuVisible,
    showMenu,
    hiddenMenu } = appSlice.actions;
export default appSlice.reducer;

