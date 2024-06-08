import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth.service.js';
import Form from "../components/Form";
import ImgLogo from "../components/ImgLogo";

const Register = () => {

	const navigate = useNavigate();

    const registerSubmit = (data) => {
        register(data).then(() => {
            navigate('/')
        })
    }

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
						name: "password",
						placeholder: "Ingrese su contraseña",
						type: "password",
					},
				]}
				buttonText="Registrarse"
				onSubmit={registerSubmit}
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
