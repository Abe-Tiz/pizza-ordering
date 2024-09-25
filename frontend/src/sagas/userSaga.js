// src/redux/userSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { registerRequest, registerSuccess, registerFailure } from "../redux/userSlice";

function* registerUser(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/user/register",
      action.payload
    );
    // console.log("response:",response.data)
    yield put(registerSuccess(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(registerFailure(errorMessage));
  }
}

export function* userSaga() {
  yield takeLatest(registerRequest.type, registerUser);
}
