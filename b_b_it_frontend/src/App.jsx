import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Admin } from "./components/Admin"

 

function App() {
  

  return (
    <div className="App">
      
       <Routes>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/admin"  element={<Admin/>}/>
       </Routes>
    </div>
  )
}

export default App
