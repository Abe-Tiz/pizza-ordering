import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import { combineSlices } from "@reduxjs/toolkit";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineSlices({
  user: userReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
