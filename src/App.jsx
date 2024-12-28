import AOS from 'aos';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DashboardLayouts } from './components/Layouts/Layouts';
import LoginPage from './modules/Auth/components/LoginPage';
import Books from './modules/Books';
import Home from './modules/Home';
import './App.css'
import './index.css'
import 'aos/dist/aos.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  // Fungsi untuk logout saat token expired
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    setToken(null); // Set state token menjadi null
  };

  return (
    <>
      <Router>
        {token ? (
          <DashboardLayouts setToken={setToken}>
            <Routes>
              <Route path="/" element={<Home data-aos="fade-up" />} />
              <Route 
              path="/books" 
              element={<Books data-aos="fade-up" handleLogout={handleLogout} />} />
            </Routes>
          </DashboardLayouts>
        ) : (
          <LoginPage setToken={setToken} />
        )}
      </Router>
    </>
  )
}

export default App
