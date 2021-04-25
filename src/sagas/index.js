import { all, fork } from "redux-saga/effects";
import { watcherUserListSaga as userListSaga } from "./userList";

export default function* rootSaga() {
  yield all([fork( userListSaga )]);
}
