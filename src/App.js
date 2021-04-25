import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import { Switch, Route } from "react-router-dom"
import userList from "./component/userList/userList"


function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={userList} />
      </Switch>
    </>
  )
}

export default App
