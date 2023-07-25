import React, { useState } from "react";
//import Button from "../button/button";

import "./popup.scss";

const UserEditPopup = ({ data, onClose }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedEmail, setEditedEmail] = useState(data.email);
  const [editedVerified, setEditedVerified] = useState(data.verified);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Editar usuario</h2>
        <label>Nombre</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <label>Usuario</label>
        <select
          value={editedVerified}
          onChange={(e) => setEditedVerified(e.target.value)}
        >
          <option value={true}>Verificado</option>
          <option value={false}>No verificado</option>
        </select>
        <div className="popup__buttons">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleCancel}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default UserEditPopup;
