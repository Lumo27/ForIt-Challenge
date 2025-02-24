import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
// Se conecta con fetch a la info, la guarda, o muestra error.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
//Return para procesar y renderizar usuarios
  return (
    //Container para meter cards
<div className="container">
      {/* Aca se hace un map, para recorrer todos los usuarios conseguidos, y se usa desestructuraciones para facilitar el ingreso a la info. */}
      {users.map(({ id, name, username, email, address: { city }, phone, company: { name: companyName } }) => (
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
