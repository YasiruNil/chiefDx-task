import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducers/index"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/index"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)
store.subscribe(() => {
  console.log("store changed", store.getState())
})
export default store