import { all } from "redux-saga/effects";
import { customerSaga, loginCustomerSaga, registerAdminSaga, userSaga, watchFetchRestaurant } from "./userSaga";
import { watchAddMenuItem, watchdeleteMenu, watchFetchMenu } from "./menuSaga";
import { watchAddRole, watchDisplayRole } from "./roleSaga";
import { watchAddOrder, watchFetchOrder, watchSpecificFetchOrder } from "./orderSaga";


export default function* rootSaga() {
    yield all([
        userSaga(),
        registerAdminSaga(),
        customerSaga(),
        loginCustomerSaga(),
        watchFetchMenu(),
        watchFetchRestaurant(),

        // menu
        watchAddMenuItem(),

        // role
        watchAddRole(),
        watchDisplayRole(),

        // order
        watchAddOrder(),
        watchFetchOrder(),
        watchSpecificFetchOrder(),
        watchdeleteMenu()
    ])
}