import { toast } from "react-toastify"
import {
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_REQUEST_FAIL,
  FETCH_USERS_LIST_REQUEST_SUCCESS,
} from "../action_types/index"
import { put, takeLatest } from "redux-saga/effects"
import { getUserDetails } from "../services/userList"

export function* watcherUserListSaga() {
  yield takeLatest(FETCH_USERS_LIST_REQUEST, workerUserListSaga)
}

function* workerUserListSaga() {
  const result = yield getUserDetails()
  if (result && result.status === 200) {
    yield put({ type: FETCH_USERS_LIST_REQUEST_SUCCESS , response: result.data })
  } else if (result.data.statusCode === 201) {
    yield put({ type: FETCH_USERS_LIST_REQUEST_FAIL })
    toast.error("Failed to Fetch User Data")
 
  }
}
