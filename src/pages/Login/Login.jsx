import React, { useState } from 'react';
import './Login.css';
import Carousel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/boxful_logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
        <input placeholder="Correo Electrónico" className="form-input" />
        <div className="password-input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Contraseña"
            className="form-input password-input"
          />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
        <button type="button" className="form-button">
          Iniciar Sesión
        </button>
        <a href="/register" className="register-link">
          ¿No tienes cuenta? Regístrate aquí
        </a>
      </div>
    </div>
  );
};

export default Login;
