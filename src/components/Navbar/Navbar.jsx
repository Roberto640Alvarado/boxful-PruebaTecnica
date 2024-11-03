import { Layout } from 'antd';
import logo from '../../assets/boxful_logo.png';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header className="navbar-header">
            <div className="navbar-logo-container">
                <img src={logo} alt="boxful" className="navbar-logo" />
            </div>
        </Header>
    );
};

export default Navbar;