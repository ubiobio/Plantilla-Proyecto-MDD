import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import { getUsers, deleteUser } from '../services/user.service';
import searchIcon from '../assets/searchIcon.svg';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const columns = ['Nombre', 'Rut', 'Correo', 'Rol', 'Acción'];

  const dataUser = async () => {
    try {
      const response = await getUsers();
      const formattedData = response.data.map(user => ({
        Nombre: user.username,
        Rut: user.rut,
        Correo: user.email,
        Rol: user.roles[0].name
      }));
      setUsers(formattedData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleDelete = async (rut) => {
    try {
      await deleteUser(rut);
      setUsers(users.filter(user => user.Rut !== rut));
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleEdit = (rut) => {
    const user = users.find(u => u.Rut === rut);
    navigate(`/edit-user/${rut}`, { state: { user } });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dataUser();
  }, []);

  const filteredUsers = users.filter(user =>
    user.Rut.includes(searchTerm)
  );
  

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <div className='table-container'>
          <div className='search-container'>
            <div className='search-input-wrapper'>
              <img src={searchIcon} alt="Buscar" className='search-icon' />
              <input
                type="text"
                placeholder="Buscar usuario por rut"
                value={searchTerm}
                onChange={handleSearch}
                className='search-input'
              />
            </div>
          </div>
          <Table columns={columns} data={filteredUsers} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};

export default Users;
