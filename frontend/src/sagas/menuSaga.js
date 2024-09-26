
import { call, put, takeLatest } from "redux-saga/effects";
import {
  addMenuItemRequest,
  addMenuItemSuccess,
  addMenuItemFailure,
} from "../redux/menuSlice";
import axios from "axios";

function* addMenuItem(action) {
  const { name, toppings, price, photo } = action.payload;

   
  const formattedToppings = `${toppings.join(",")}`;  

  const formData = new FormData();
  formData.append("name", name);
  formData.append("toppings", formattedToppings);  
  formData.append("price", price);
  formData.append("photo", photo);

  try {
    const response = yield call(axios.post, "http://localhost:4000/menu", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
      console.log("response:",response)

    yield put(addMenuItemSuccess(response.data)); 
  } catch (error) {
    yield put(addMenuItemFailure(error.message));  
  }
}

export function* watchAddMenuItem() {
  yield takeLatest(addMenuItemRequest.type, addMenuItem);
}
