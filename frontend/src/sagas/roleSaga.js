import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  addRoleFailure,
  addRoleRequest,
  addRoleSuccess,
  fetchRoleFailure,
  fetchRoleRequest,
  fetchRoleSuccess,
} from "../redux/roleSlice";

// add role 
function* addRole(action) {
  const { name, permission } = action.payload;

  // console.log("saga",action.payload);

  if (!name || !permission.length) {
    yield put(addRoleFailure("Name and permissions are required."));
    return;
  }
  const formData = new FormData();
  formData.append("name", name);
  formData.append("permission", permission);

  try {
  const response = yield call(axios.post, "http://localhost:4000/role", { name, permission });
    console.log("saga:", response);
    yield put(addRoleSuccess(response.data));
  } catch (error) {
    console.error("Error response:", error.response);
    yield put(addRoleFailure(error.response.data.message || error.message));
  }
}

export function* watchAddRole() {
  yield takeLatest(addRoleRequest.type, addRole);
}

// display roles
function* displayRole() {
  try {
    const response = yield call(axios.get, "http://localhost:4000/role/view-role")
    const data = response.data;
    yield put(fetchRoleSuccess(data));
  } catch (error) {
    yield put(fetchRoleFailure(error.message));
  }
}

export function* watchDisplayRole(){
  yield takeLatest(fetchRoleRequest.type,displayRole)
}
