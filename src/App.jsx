import './App.css'
import './index.css'
import 'antd/dist/reset.css';
import MainLayout from './pages/MainLayout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
