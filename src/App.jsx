import './App.css'
import './index.css'
import 'antd/dist/reset.css';
import MainLayout from './pages/MainLayout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
