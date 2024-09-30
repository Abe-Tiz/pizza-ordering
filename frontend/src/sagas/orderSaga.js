import { call, put, takeLatest } from "redux-saga/effects";
import {
  addOrderItemFailure,
  addOrderItemRequest,
  addOrderItemSuccess,
  fetchOrderFailure,
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchSpecificOrderFailure,
  fetchSpecificOrderRequest,
  fetchSpecificOrderSuccess,
} from "../redux/orderSlice";
import axios from "axios";

function* addOrderItem(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/order",
      action.payload
    );
    yield put(addOrderItemSuccess(response.data));
  } catch (error) {
    yield put(addOrderItemFailure(error.message));
  }
}

export function* watchAddOrder() {
  yield takeLatest(addOrderItemRequest.type, addOrderItem);
}

// fetch order
function* fetchOrderSaga() {
  try {
    const response = yield call(
      axios.get,
      "http://localhost:4000/order/get-order"
    );
    const data = yield response.data;
    yield put(fetchOrderSuccess(data));
  } catch (error) {
    yield put(fetchOrderFailure(error.message));
  }
}

export function* watchFetchOrder() {
  yield takeLatest(fetchOrderRequest.type, fetchOrderSaga);
}
// fetch specific order
function* fetchSpecificOrderSaga(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/order/get-customer-order",
       { customer_id: action.payload }
    );;
    yield put(fetchSpecificOrderSuccess(response.data));
  } catch (error) {
    yield put(fetchSpecificOrderFailure(error.message));
  }
}

export function* watchSpecificFetchOrder() {
  yield takeLatest(fetchSpecificOrderRequest.type, fetchSpecificOrderSaga);
}
