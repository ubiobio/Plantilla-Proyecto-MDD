import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { profile } from "../services/auth.service";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
    rut: '',
    rolName: ''
  });

  useEffect(() => {
    async function dataProfile(){  
      try {
        const { data } = await profile();
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    dataProfile();
  }, []);

  return (
    <main className="profile_page">
      <Navbar />
      <div className="sections">
        <img className="profile_image" src="profile.png" alt="Imagen de perfil" />
        <div className="form">
        <Form
          backgroundColor="#FFFFFF"
          title="Perfil"
          fields={[
            {
              label: "Nombre de usuario",
              name: "username",
              type: "text",
              value: userProfile.username,
              disabled: true,
            },
            {
              label: "Correo electrónico",
              name: "email",
              type: "email",
              value: userProfile.email,
              disabled: true,
            },
            {
              label: "RUT",
              name: "rut",
              type: "text",
              value: userProfile.rut,
              disabled: true,
            },
            {
              label: "Rol",
              name: "role",
              type: "text",
              value: userProfile.rolName,
              disabled: true,
            },
          ]}
        />
        </div>
      </div>
    </main>
  );
};

export default Profile;
