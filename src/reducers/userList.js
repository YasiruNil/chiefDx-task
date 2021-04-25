import {
  FETCH_USERS_LIST_REQUEST_SUCCESS,
} from "../action_types/index"
const initialstate = {
    users: [],
};

export const userListReducer = (status = initialstate, action) => {
  switch (action.type) {
    case FETCH_USERS_LIST_REQUEST_SUCCESS:
      return {
        ...status,
        users: action.response,
      }
    default:
      return status
  }
}
