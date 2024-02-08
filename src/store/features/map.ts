import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

interface MapState {
    zoom: NumberRange<8, 21>,
    center: [number, number],
    clickEvent: 'INC ZOOM' | 'DEC ZOOM' | 'NONE',
}

const initialState: MapState = {
    zoom: 10,
    center: [55.751574, 37.573856],
    clickEvent: 'NONE',
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        // первые две функции здесь - это функции при нажатии на кнопки изменения масштаба
        // в этом случае нужно менять не сам zoom, а обозначить событие
        // так как для плавного изменения масштаба нужно вызвать внутреннюю функцию карты
        incrementZoom(state) {
            if (state.zoom < 20) {
                state.clickEvent = 'INC ZOOM';
            }
        },
        decrementZoom(state) {
            if (state.zoom > 8) {
                state.clickEvent = 'DEC ZOOM';
            }
        },
        updateZoom(state, action: PayloadAction<number>) {
            const newZoom = state.zoom + action.payload;
            if (newZoom < 8) {
                state.zoom = 8;
            } else if (newZoom > 20) {
                state.zoom = 20;
            } else {
                state.zoom = newZoom as NumberRange<8, 21>;
            }
            state.clickEvent = 'NONE';
        },
        changeZoom(state, action: PayloadAction<number>) {
            const newZoom = action.payload;
            if (newZoom < 8) {
                state.zoom = 8;
            } else if (newZoom > 20) {
                state.zoom = 20;
            } else {
                state.zoom = newZoom as NumberRange<8, 21>;
            }
            state.clickEvent = 'NONE';
        },
        updateLatitude(state, action: PayloadAction<number>) {
            state.center[0] += action.payload;
        },
        updateLongitude(state, action: PayloadAction<number>) {
            state.center[1] += action.payload;
        },
        changeState(state, action: PayloadAction<{zoom: number, center: Array<number>}>) {
            state.center[0] = action.payload.center[0];
            state.center[1] = action.payload.center[1];
            state.zoom = action.payload.zoom as NumberRange<8, 21>;
            state.clickEvent = 'NONE';
        },
    },
})

export const { 
    incrementZoom, 
    decrementZoom, 
    updateZoom, 
    changeZoom,
    updateLatitude,
    updateLongitude,
    changeState } = mapSlice.actions;
export default mapSlice.reducer;