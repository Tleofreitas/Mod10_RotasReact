import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './styles.css';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">
                <Link to="/">
                    <h1 className="site-name">MeuSite</h1>
                </Link>
            </div>
        </header>
    );
}