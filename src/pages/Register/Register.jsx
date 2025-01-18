import React, { useState } from 'react';
import './Register.css';
import Carousel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/boxful_logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="register-container">
      <div className="carousel-container">
        <div className="carousel-header">
          <h1 className="carousel-title">
            ¡Solo un paso más para hacer tus envíos más fáciles y rápidos!
          </h1>
        </div>
        <Carousel />
      </div>
      <div className="form-container">
        <div className="logo-title">
          <h1 className="form-title">Regístrate en</h1>
          <img src={logo} alt="boxful" className="navbar-logo" />
        </div>
        <input placeholder="Nombre de Usuario" className="form-input" />
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
          Registrarse
        </button>
        <a href="/login" className="login-link">
          ¿Ya tienes cuenta? Inicia sesión aquí
        </a>
      </div>
    </div>
  );
};

export default Register;
