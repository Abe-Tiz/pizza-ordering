// src/redux/userSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { registerRequest, registerSuccess, registerFailure, loginSuccess, loginFailure, loginRequest } from "../redux/userSlice";

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

// login saga
function* loginUser(action) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:4000/user/login",
      action.payload
    );
    // console.log("response:",response.data)
    yield put(loginSuccess(response.data));
  } catch (error) {
  const errorMessage = error.response ? error.response.data.message : error.message;
    yield put(loginFailure(errorMessage));
  }
}

export function* userSaga() {
  yield takeLatest(loginRequest.type, loginUser);
}
