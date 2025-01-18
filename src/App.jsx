import './App.css'
import './index.css'
import 'antd/dist/reset.css';
import MainLayout from './pages/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PackageForm from './components/PackageForms/PackageForms';
import OrderForm from './components/OrdenForms/OrdenForms';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/*Rutas publica*/}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          {/*Rutas protegidas*/}
          <Route element={<ProtectedRoute />}>
          <Route path="/Home" element={<MainLayout />}>
              <Route index element={<OrderForm />} /> 
              <Route path="package" element={<PackageForm />} />
            </Route>

            <Route path="*" element={<Navigate to="/Home" />} />
          </Route>

          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
