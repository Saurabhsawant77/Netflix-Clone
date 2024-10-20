import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Registration from "./pages/Registration"
import AuthScreen from "./pages/home/AuthScreen"


function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUpPage/>}></Route>
      <Route path='/logout' element={<AuthScreen/>}></Route>
      <Route path='/signup/registration' element={<Registration/>}></Route>
    </Routes>
  )
}

export default App
