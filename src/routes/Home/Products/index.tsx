import { NavLink } from "react-router-dom";
import './styles.css';

export default function Products() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt20">
                            <nav className="navbarProd">
                                <NavLink to="/home" className={({ isActive }) => isActive ? "menu-itemP menu-active" : "menu-itemP"} >
                                    Computadores
                                </NavLink>
                                <NavLink to="/products" className={({ isActive }) => isActive ? "menu-itemP menu-active" : "menu-itemP"} >
                                    Eletrônicos
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "menu-itemP menu-active" : "menu-itemP"} >
                                    Livros
                                </NavLink>
                            </nav>
                    </div>
                </div>
            </section>
        </main>
    );
}