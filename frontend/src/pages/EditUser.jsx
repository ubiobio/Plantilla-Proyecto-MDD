import Form from "../components/Form.jsx";
import Navbar from "../components/Navbar.jsx";
import { updateUser } from "../services/user.service.js";
import { useLocation, useNavigate } from "react-router-dom";
const EditUser = () => {

	const location = useLocation();
	const navigate = useNavigate();

	const { user } = location.state;

	const modUser = (data) => {
        updateUser(data, user.Rut)
            .then(response => {
                console.log("User updated successfully:", response);
				navigate('/users');
            })
            .catch(error => {
                console.error("Error updating user:", error);
            });
    };

	return (
		<>
			<Navbar />
			<div className="form-container">
			<div className="form-wrapper">
			<Form
				title="Editar usuario"
				fields={[
                    {
						label: "Nombre de usuario",
                        name: "username",
                        placeholder: user.Nombre || "Didudo",
                        type: "text",
                    },
					{
						label: "Correo electrónico",
						name: "email",
						placeholder: user.Correo || "example@gmail.com",
						type: "email",
					},
                    {
						label: "RUT",
                        name: "rut",
                        placeholder: user.Rut || "XX.XXX.XXX-X",
                        type: "text",
                    },
					{
						label: "Nombre de rol",
						name: "role",
						placeholder: user.Rol || "user",
						type: "text",
					},
				]}
				buttonText="Guardar cambios"
				onSubmit={modUser}
			/>
			</div>
			</div>
		</>
	);
};

export default EditUser;
