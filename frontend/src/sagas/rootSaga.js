import { all } from "redux-saga/effects";
import { customerSaga, loginCustomerSaga, registerAdminSaga, userSaga } from "./userSaga";
import { watchAddMenuItem } from "./menuSaga";


export default function* rootSaga() {
    yield all([
        userSaga(),
        registerAdminSaga(),
        customerSaga(),
        loginCustomerSaga(),

        // menu
        watchAddMenuItem()
    ])
}