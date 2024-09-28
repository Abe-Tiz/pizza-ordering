import { all } from "redux-saga/effects";
import { customerSaga, loginCustomerSaga, registerAdminSaga, userSaga, watchFetchRestaurant } from "./userSaga";
import { watchAddMenuItem, watchFetchMenu } from "./menuSaga";
import { watchAddRole } from "./roleSaga";


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
        watchAddRole()
    ])
}