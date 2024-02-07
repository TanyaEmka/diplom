import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Map from './features/map';
import { polygonApi } from '../api/paths/polygonApi';
import { treeApi } from '../api/paths/treeApi';

export const store = configureStore({
  reducer: {
    map: Map,
    [polygonApi.reducerPath]: polygonApi.reducer,
    [treeApi.reducerPath]: treeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(polygonApi.middleware)
      .concat(treeApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
