import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth.service.js';
import Form from '../components/Form';
import ImgLogo from '../components/ImgLogo';

const Login = () => {
    const navigate = useNavigate();

    const loginSubmit = (data) => {
        login(data).then(() => {
            navigate('/home')
        })
    }

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
                        required: true,
                    },
                    {
                        name: "password",
                        placeholder: "Ingrese su contraseña",
                        type: "password",
                        required: true,
                    },
                ]}
                buttonText="Iniciar sesión"
                onSubmit={loginSubmit}
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
