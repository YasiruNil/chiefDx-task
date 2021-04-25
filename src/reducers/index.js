import { combineReducers } from "redux"
import { userListReducer as userList } from "./userList"

const rootReducer = combineReducers({
  userList,
})
export default rootReducer
