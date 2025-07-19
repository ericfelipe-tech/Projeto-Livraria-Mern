import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Menu({ toggleSidebar }) {
    return (
        <div class="Caixa-principal">
            <div class="Side-bar">
                <div class="titulo">
                    <h1> Dashboard</h1>
                </div>
                <div class="primeiro-bloco">
                    <span className="menu-btn" onClick={toggleSidebar}>
                <RiCloseLargeFill />
                </span>
                    <ul>
                        <nav>
                            <li>
                                <Link to="/home"> 🏠Home</Link>
                            </li>
                            <li>
                                <Link to="/about">👤Profile</Link>
                            </li>
                            <li>
                                <Link to="/contact">💬Messages</Link>
                            </li>
                            <li>
                                <Link to="/courses">🕓History</Link>
                            </li>
                            <li>
                                <Link to="/courses">✅Tasks</Link>
                            </li>
                            <li>
                                <Link to="/courses">👥Comunity</Link>
                            </li>
                        </nav>
                    </ul>
                </div>
                <div class="segundo-bloco">
                    <ul>
                        <nav>
                            <li>
                                <Link to="/courses">⚙️Settings</Link>
                            </li>
                            <li>
                                <Link to="/courses">❓Suport</Link>
                            </li>
                            <li>
                                <Link to="/courses">🛡️Privacy</Link>
                            </li>
                        </nav>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Menu;