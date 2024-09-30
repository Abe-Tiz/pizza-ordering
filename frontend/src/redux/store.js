import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./userSlice";
import menuReducer from "./menuSlice";
import roleReducer from "./roleSlice";
import orderReducer from "./orderSlice";
import { combineSlices } from "@reduxjs/toolkit";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineSlices({
  user: userReducer,
  menu: menuReducer,
  role: roleReducer,
  order:orderReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
