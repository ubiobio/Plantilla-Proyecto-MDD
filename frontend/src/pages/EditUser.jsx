import Form from "../components/Form";
import Navbar from "../components/Navbar";

const EditUser = () => {
	return (
		<>
			<Navbar />
			<Form
				title="Editar usuario"
				fields={[
                    {
                        name: "username",
                        placeholder: "",
                        type: "text",
                    },
					{
						name: "email",
						placeholder: "",
						type: "email",
					},
                    {
                        name: "rut",
                        placeholder: "",
                        type: "text",
                    },
					{
						name: "role",
						placeholder: "",
						type: "text",
					},
				]}
				buttonText="Guardar cambios"
			/>
		</>
	);
};

export default EditUser;
