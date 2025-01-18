import React, { useState } from 'react';
import './Register.css';
import Carousel from '../../components/Carrusel/Carrusel';
import logo from '../../assets/boxful_logo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/AuthService';
import context from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginRedirect = () => {
    navigate('/Login');
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!email || !password || !username) {
      toast.error("Por favor ingresa todos los campos");
      return;
    }
    try {
      const response = await authService.register(username, email, password);

      if (response.status === 201) { 
        let token = response.data.data.token;
        context.register(token);
        navigate('/Home');
      }
    } catch (error) {
      toast.error("Error al registrar usuario");
    }
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
        <input
          placeholder="Nombre de Usuario"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
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
        <button type="button" className="form-button" onClick={handleRegister}>
          Registrarse
        </button>
        <button type="button" onClick={handleLoginRedirect} className="login-link">
          ¿Ya tienes cuenta? Inicia sesión aquí
        </button>
      </div>
    </div>
  );
};

export default Register;
