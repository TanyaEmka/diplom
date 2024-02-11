import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type polygonVisibleType = {
    polygonId: number,
    polygonName: string,
    polygonvisible: boolean,
};

type polygonDataType = {
    id: number,
    name: string,
}

interface AppState {
    menuVisible: boolean,
    menuPolygonListVisible: Array<polygonVisibleType>,
}

const initialState: AppState = {
    menuVisible: false,
    menuPolygonListVisible: [],
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
        },
        updatePolygonList(state, action: PayloadAction<{ polygons: Array<polygonDataType> }>) {
            state.menuPolygonListVisible = [];
            action.payload.polygons.forEach((polygon) => {
                state.menuPolygonListVisible.push({
                    polygonId: polygon.id,
                    polygonName: polygon.name,
                    polygonvisible: true,
                });
            });
        },
        showAllPolygons(state) {
            state.menuPolygonListVisible.forEach((polygonVisible, index) => {
                state.menuPolygonListVisible[index].polygonvisible = true;
            });
        },
        changePolygonVisible(state, action: PayloadAction<{ polygonId: number }>) {
            const index = state.menuPolygonListVisible
                .map((polygon) => polygon.polygonId)
                .indexOf(action.payload.polygonId);
            if (index !== -1) {
                state.menuPolygonListVisible[index].polygonvisible = !state.menuPolygonListVisible[index].polygonvisible;
                return;
            }
            throw new Error('Области с таким id не существует');
        },
    }
});

export const { 
    changeMenuVisible,
    showMenu,
    hiddenMenu,
    updatePolygonList,
    showAllPolygons,
    changePolygonVisible } = appSlice.actions;
export default appSlice.reducer;

