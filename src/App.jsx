import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const [filteredUsers, setFilteredUsers] = useState([]); // Estado para los usuarios filtrados

  // Se conecta con fetch a la info, la guarda, o muestra error.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Al principio mostramos todos los usuarios
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Función que maneja el cambio en el campo de búsqueda
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.address.city.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered); // Actualizamos los usuarios filtrados
  };

  return (
    // Container para meter cards
    <div className="container">
      <div className="user-search">
        <input
          type="text"
          placeholder="Buscar por nombre, email o ciudad"
          value={searchTerm}
          onChange={handleSearch} // Se dispara cada vez que el usuario escribe
        />
      </div>
      {/* Renderizamos los usuarios filtrados */}
      {filteredUsers.map(({ id, name, username, email, address: { city }, phone, company: { name: companyName } }) => (
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
      ))}
    </div>
  );
}

export default App;
