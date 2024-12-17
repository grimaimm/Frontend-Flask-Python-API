import React, { useState } from 'react'
import Introduction from './Introduction'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.access_token) {
        setToken(data.access_token);
        localStorage.setItem('token', data.access_token);

        // navigate('/');
      } else {
        alert("Login Failed!");
      }
    } catch (error) {
      alert("An error occurred during login.");
    }
  };

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 flex justify-center items-center min-h-dvh">
      <div className="py-8 lg:px-4 px-6 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <Introduction data-aos="fade-right" />
        <LoginForm
          onSubmit={handleLogin}
          username={username}
          onChangeUsername={(e) => setUsername(e.target.value)}
          password={password}
          onChangePassword={(e) => setPassword(e.target.value)}
          data-aos="fade-left"
        />
      </div>
    </section>
  )
}

export default LoginPage