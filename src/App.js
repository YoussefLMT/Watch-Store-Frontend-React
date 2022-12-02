import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={localStorage.getItem('token') ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={localStorage.getItem('token') ? <Navigate to='/' /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
