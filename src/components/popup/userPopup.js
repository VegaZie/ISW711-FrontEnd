import React, { useState } from "react";
//import Button from "../button/button";

import "./popup.scss";

const UserEditPopup = ( data, { name, email, verified, onClose }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedVerified, setEditedVerified] = useState(verified);

  const handleEdit = () => {
    // Lógica para editar la información de usuario
    console.log("Editar Usuario", editedName, editedEmail, editedVerified);
    onClose();
  };

  const handleDelete = () => {
    // Lógica para eliminar la información de usuario
    console.log("Eliminar Usuario", name);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Edit User</h2>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <input
          type="email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <select
          value={editedVerified}
          onChange={(e) => setEditedVerified(e.target.value)}
        >
          <option value={true}>Verified</option>
          <option value={false}>Not Verified</option>
        </select>
        <div className="popup__buttons">
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserEditPopup;
