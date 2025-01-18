import { Layout, Button } from 'antd';
import logo from '../../assets/boxful_logo.png';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const handleLogout = () => {
    console.log("Sesión cerrada");
  };

  return (
    <Header className="navbar-header">
      <div className="navbar-logo-container">
        <img src={logo} alt="boxful" className="navbar-logo" />
      </div>
      <Button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </Header>
  );
};

export default Navbar;
