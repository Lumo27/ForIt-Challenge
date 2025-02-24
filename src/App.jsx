import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    city: "",
    phone: "",
    companyName: "",
  });

  // Se conecta con fetch a la info, la guarda, o muestra error.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Manejador de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar los usuarios basados en la búsqueda
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejo de los cambios en el formulario de usuario nuevo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Agregar un nuevo usuario
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserData = {
      id: users.length + 1, // Generar un ID simple (no recomendable en producción)
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      address: { city: newUser.city },
      phone: newUser.phone,
      company: { name: newUser.companyName },
    };
    setUsers([...users, newUserData]);
    setNewUser({
      name: "",
      username: "",
      email: "",
      city: "",
      phone: "",
      companyName: "",
    });
  };

  return (
    <div className="container">
      <div className="user-search">
        <input
          type="text"
          placeholder="Buscar por nombre, email o ciudad"
          value={searchTerm}
          onChange={handleSearch} // Se dispara cada vez que el usuario escribe
        />
      </div>

      {/* Aca se hace un map, para recorrer todos los usuarios conseguidos, y se usa desestructuraciones para facilitar el ingreso a la info. */}
      {filteredUsers.map(
        ({ id, name, username, email, address: { city }, phone, company: { name: companyName } }) => (
          <div key={id} className="card">
            <div className="card-header">
              <h3>{name}</h3>
              <span>{username}</span>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Ciudad:</strong> {city}</p>
              <p><strong>Teléfono:</strong> {phone}</p>
              <p><strong>Empresa:</strong> {companyName}</p>
            </div>
          </div>
        )
      )}

      {/* Formulario para agregar nuevo usuario */}
      <div className="add-user-form">
        <h2>Agregar Usuario</h2>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={newUser.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={newUser.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Nombre de la Empresa"
            value={newUser.companyName}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar Usuario</button>
        </form>
      </div>
    </div>
  );
}

export default App;
