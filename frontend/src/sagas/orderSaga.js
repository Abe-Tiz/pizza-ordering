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
  // const { name, toppings, price, photo, quantity } = action.payload;
  // const formData = new FormData();

  // Append data to formData
  // formData.append("name", name);
  // toppings.forEach((topping) => {
  //   formData.append("toppings", topping);
  // });
  // formData.append("price", price);
  // formData.append("photo", photo);
  // formData.append("quantity", quantity);
  // formData.append("status", "Pending");

  //  console.log("Response data:", action.payload);
  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/order",
      action.payload
    );
    // console.log("Response data:", response.data);
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
    );
    // const data = yield response.data;
    console.log("specific order saga:", action.payload);
    yield put(fetchSpecificOrderSuccess(response.data));
  } catch (error) {
    yield put(fetchSpecificOrderFailure(error.message));
  }
}

export function* watchSpecificFetchOrder() {
  yield takeLatest(fetchSpecificOrderRequest.type, fetchSpecificOrderSaga);
}
