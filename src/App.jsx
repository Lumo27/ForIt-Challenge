import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(users);

  return (
    <div className="container">
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
