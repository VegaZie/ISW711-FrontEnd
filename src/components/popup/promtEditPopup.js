import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import "./popup.scss";
import "./tags.css";

const PromtEditPopup = ({ data, onClose }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedInstructions, setEditedInstructions] = useState(
    data.instruction
  );
  const [editedInput, setEditedInput] = useState(data.input);
  const [editedTags, setEditedTags] = useState(data.tags);
  const [editedResponse, setEditedResponse] = useState(data.response);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleCancel = () => {
    onClose();
  };

  const executePromt = () => {
    setEditedResponse("s");
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Editar Promt</h2>
        <label>Nombre</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <label>Entrada</label>
        <input
          type="text"
          value={editedInput}
          onChange={(e) => setEditedInput(e.target.value)}
        />
        <label>Instrucción</label>
        <input
          type="text"
          value={editedInstructions}
          onChange={(e) => setEditedInstructions(e.target.value)}
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
        <textarea value={editedResponse} readOnly />
        <div className="popup__buttons">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleCancel}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default PromtEditPopup;
