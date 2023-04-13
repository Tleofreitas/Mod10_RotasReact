import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './styles.css';
import HomeImg from '../../assets/Home.png';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">                
                <nav className="navbar">
                    <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                        Sobre Nós
                    </NavLink>
                </nav>
                <Link to="/">
                    <img src={HomeImg} alt="Home" />
                </Link>
            </div>
        </header>
    );
}