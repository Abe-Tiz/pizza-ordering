import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import menuReducer from "./menuSlice";
import { combineSlices } from "@reduxjs/toolkit";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineSlices({
  user: userReducer,
  menu:menuReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
