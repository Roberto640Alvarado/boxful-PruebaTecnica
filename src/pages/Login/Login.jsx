import React, { useState } from 'react';
import './Login.css';
import Carousel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/boxful_logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import context from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegisterRedirect = () => {
    navigate('/Register'); 
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Por favor ingresa todos los campos");
      return;
    }
    try {
      const result = await context.login(email, password);
      if (result.status === 200) {
        navigate('/Home');
      } else {
        toast.error("Credenciales incorrectas");
      }
    } catch (err) {
      toast.error("Hubo un error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="carousel-container">
        <div className="carousel-header">
          <h1 className="carousel-title">
            Gestiona tus envíos con nosotros, los realizamos a todo el país
          </h1>
        </div>
        <Carousel />
      </div>
      <div className="form-container">
        <div className="logo-title">
          <h1 className="form-title">Bienvenido a</h1>
          <img src={logo} alt="boxful" className="navbar-logo" />
        </div>
        <input placeholder="Correo Electrónico"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        <div className="password-input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Contraseña"
            className="form-input password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <button type="button" className="form-button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button type="button" onClick={handleRegisterRedirect} className="register-link">
        ¿No tienes cuenta? Regístrate aquí
      </button>
      </div>
    </div>
  );
};

export default Login;
