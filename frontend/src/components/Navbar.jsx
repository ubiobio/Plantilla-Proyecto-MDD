import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();

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
				<li
					className={
						location.pathname === "/usuarios" ? "active" : ""
					}
				>
					<NavLink to="/users">Usuarios</NavLink>
				</li>
				<li className={location.pathname === "/perfil" ? "active" : ""}>
					<NavLink to="/profile">Perfil</NavLink>
				</li>
				<li className={location.pathname === "/" ? "active" : ""}>
					<NavLink to="/">Cerrar</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
