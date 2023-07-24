import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import "./popup.scss";
import "./tags.css"

const PromtEditPopup = ({ data, name, onClose }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedInstructions, setEditedInstructions] = useState(data.instruction);
  const [editedInput, setEditedInput] = useState(data.input);
  const [editedTags, setEditedTags] = useState(data.tags);
  const [editedResponse, setEditedResponse] = useState(data.response);

  const handleEdit = () => {
    // Lógica para editar la información del promt edit
    console.log(
      "Editar Promt Edit",
      editedName,
      editedInstructions,
      editedTags,
      editedResponse
    );
    onClose();
  };

  const handleDelete = () => {
    // Lógica para eliminar la información del promt edit
    console.log("Eliminar Promt Edit", name);
    onClose();
  };

  const handleCancel = () => {
    onClose();
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
        <textarea
          value={editedResponse}
          onChange={(e) => setEditedResponse(e.target.value)}
        />
        <div className="popup__buttons">
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PromtEditPopup;
