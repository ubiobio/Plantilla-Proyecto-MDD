import React from "react";
import Form from "../components/Form";
import ImgLogo from "../components/ImgLogo";

const Register = () => {
	return (
		<main className="container">
			<ImgLogo />
			<Form
				title="Crea tu cuenta"
				fields={[
					{
						name: "username",
						placeholder: "Ingrese su nombre de usuario",
						type: "text",
					},
                    {
                        name: "email",
                        placeholder: "Ingrese su correo electrónico",
                        type: "email",
                    },
                    {
                        name: "rut",
                        placeholder: "Ingrese su rut",
                        type: "text",
                    },
                    {
                        //! Revisar si en la data se envia correctamente con el rol por default de "user"
                        name: "role",
                        value: "user",
                        type: "hidden",
                    },
					{
						name: "password",
						placeholder: "Ingrese su contraseña",
						type: "password",
					},
				]}
				buttonText="Registrarse"
				footerContent={
					<p>
						¿Ya tienes cuenta?, <a href="/">Inicia sesión aquí!</a>
					</p>
				}
			/>
		</main>
	);
};

export default Register;
