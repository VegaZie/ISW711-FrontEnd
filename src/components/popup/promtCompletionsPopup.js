import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import "./popup.scss";
import "./tags.css";

const PromtCompletionsPopup = ({ data, name, onClose }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedTags, setEditedTags] = useState(data.tags);
  const [editedPromt, setEditedPromt] = useState(data.promt);
  const [editedTemperature, setEditedTemperature] = useState(data.temperature);
  const [editedResponse, setEditedResponse] = useState(data.response);

  const handleEdit = () => {
    // Lógica para editar la información del promt completions
    console.log(
      "Editar Promt Completions",
      editedName,
      editedTags,
      editedResponse
    );
    onClose();
  };

  const handleDelete = () => {
    // Lógica para eliminar la información del promt completions
    console.log("Eliminar Promt Completions", name);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const executePromt = () => {
    setEditedResponse("s")
  }

  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Correr Promt de Completions</h2>
        <label>Nombre</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <label>Promt</label>
        <input
          type="text"
          value={editedPromt}
          onChange={(e) => setEditedPromt(e.target.value)}
        />
        <label>Temperature</label>
        <input
          type="number"
          min="1"
          max="10"
          onChange={(e) => setEditedTemperature(e.target.value)}
          value={editedTemperature}
        />
        <label>Tags</label>
        <TagsInput
          value={editedTags}
          onChange={setEditedTags}
          name="tags"
          placeHolder="agrega tags"
        />
        <label>Respuesta</label>
        <div className="popup__buttons">
          <button onClick={executePromt}>Correr promt</button>
        </div>
        <textarea
          value={editedResponse}
          readOnly
        />
        <div className="popup__buttons">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleCancel}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default PromtCompletionsPopup;
