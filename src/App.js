import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from './features/authSlice';

function App() {

  // const dispatch = useDispatch()

  // const { token } = useSelector((state) => state.auth)

  // useEffect(() => {
  //   if(token) {
  //     dispatch(getUserData())
  //   }
  // }, [dispatch])

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
