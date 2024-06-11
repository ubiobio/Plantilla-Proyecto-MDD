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
                        label: "Correo electrónico",
                        name: "email",
                        placeholder: "example@gmail.com",
                        type: "email",
                        required: true,
                    },
                    {
                        label: "Contraseña",
                        name: "password",
                        placeholder: "**********",
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
