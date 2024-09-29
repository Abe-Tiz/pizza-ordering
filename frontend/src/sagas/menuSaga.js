
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addMenuItemRequest,
  addMenuItemSuccess,
  addMenuItemFailure,
  fetchMenuSuccess,
  fetchMenuFailure,
  fetchMenuRequest,
} from "../redux/menuSlice";
import axios from "axios";

function* addMenuItem(action) {
  const { name, toppings, price, photo } = action.payload;

  const formData = new FormData();
  formData.append("name", name);

  // Append each topping
  toppings.forEach((topping) => {
    formData.append("toppings", topping); 
  });

  formData.append("price", price);
  formData.append("photo", photo);

  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/menu",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    yield put(addMenuItemSuccess(response.data));
  } catch (error) {
    yield put(addMenuItemFailure(error.message));
  }
}

export function* watchAddMenuItem() {
  yield takeLatest(addMenuItemRequest.type, addMenuItem);
}

// fetch menu
function* fetchMenuSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:4000/menu/get-menu");
    const data = yield response.data;
    yield put(fetchMenuSuccess(data));
  } catch (error) {
    yield put(fetchMenuFailure(error.message));
  }
}

export function* watchFetchMenu() {
  yield takeLatest(fetchMenuRequest.type, fetchMenuSaga);
}
