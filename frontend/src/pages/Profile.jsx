import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <main className="profile_page">
      <Navbar />
      <div className="sections">
        <img className="profile_image" src="profile.png" alt="Imagen de perfil" />
        <Form
		backgroundColor="#FFFFFF"
          fields={[
            {
              name: "username",
              placeholder: "Nombre del usuario",
              type: "text",
            },
            {
            	name: "email",
            	placeholder: "Correo electrónico del usuario",
              type: "email",
            },
            {
              name: "rut",
              placeholder: "Rut del usuario",
              type: "text",
            },
            {
              name: "role",
              placeholder: "Rol del usuario",
              type: "text",
            },
          ]}
        />
      </div>
    </main>
  );
};

export default Profile;
