import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Map from './features/map';
import App from './features/app';
import { polygonApi } from '../api/paths/polygonApi';
import { statisticApi } from '../api/paths/statisticApi';
import { treeApi } from '../api/paths/treeApi';

export const store = configureStore({
  reducer: {
    map: Map,
    app: App,
    [polygonApi.reducerPath]: polygonApi.reducer,
    [treeApi.reducerPath]: treeApi.reducer,
    [statisticApi.reducerPath]: statisticApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(polygonApi.middleware)
      .concat(treeApi.middleware)
      .concat(statisticApi.middleware);
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
