import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from '../services/auth.service'; // Asegúrate de ajustar la ruta según tu estructura de proyecto

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const logoutSubmit = () => {
        try {
            logout();
            navigate('/'); 
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img
                        src="cohete.png"
                        alt="Logo metodología de desarrollo"
                    />
                </li>
                <li className={location.pathname === "/inicio" ? "active" : ""}>
                    <NavLink to="/home">Inicio</NavLink>
                </li>
                <li className={location.pathname === "/usuarios" ? "active" : ""}>
                    <NavLink to="/users">Usuarios</NavLink>
                </li>
                <li className={location.pathname === "/perfil" ? "active" : ""}>
                    <NavLink to="/profile">Perfil</NavLink>
                </li>
                <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to="/" onClick={logoutSubmit}>Cerrar</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
