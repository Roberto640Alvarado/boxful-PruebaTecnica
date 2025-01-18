import './App.css'
import './index.css'
import 'antd/dist/reset.css';
import MainLayout from './pages/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PackageForm from './components/PackageForms/PackageForms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<MainLayout />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
