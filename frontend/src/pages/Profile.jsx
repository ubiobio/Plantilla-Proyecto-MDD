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
        <Form
          backgroundColor="#FFFFFF"
          fields={[
            {
              name: "username",
              type: "text",
              value: userProfile.username,
              disabled: true,
            },
            {
              name: "email",
              type: "email",
              value: userProfile.email,
              disabled: true,
            },
            {
              name: "rut",
              type: "text",
              value: userProfile.rut,
              disabled: true,
            },
            {
              name: "role",
              type: "text",
              value: userProfile.rolName,
              disabled: true,
            },
          ]}
        />
      </div>
    </main>
  );
};

export default Profile;
