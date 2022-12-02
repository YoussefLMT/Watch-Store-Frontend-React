import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={localStorage.getItem('token') ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={localStorage.getItem('token') ? <Navigate to='/' /> : <Register />} />

        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
