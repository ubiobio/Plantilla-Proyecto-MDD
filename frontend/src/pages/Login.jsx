import React from "react";
import Form from "../components/Form";
import ImgLogo from "../components/ImgLogo";

const Login = () => {
	return (
		<main className="container">
			<ImgLogo />
			<Form
				title="Iniciar sesión"
				fields={[
					{
						name: "email",
						placeholder: "Ingrese su correo electrónico",
						type: "email",
					},
					{
						name: "password",
						placeholder: "Ingrese su contraseña",
						type: "password",
					},
				]}
				buttonText="Iniciar sesión"
				footerContent={
					<p>
						¿No tienes cuenta?, <a href="/register">Regístrate aquí!</a>
					</p>
				}
			/>
		</main>
	);
};

export default Login;
