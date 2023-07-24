import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import "./popup.scss";
import "./tags.css";

const PromtImagePopup = ({ data, name, onClose }) => {
  const [editedName, setEditedName] = useState(data.name);
  const [editedImageType, setEditedImageType] = useState(data.size);
  const [editedImageCount, setEditedImageCount] = useState(data.quantity);
  const [editedTags, setEditedTags] = useState(data.tags);
  const [editedResponse, setEditedResponse] = useState(data.response);

  const handleEdit = () => {
    // Lógica para editar la información del promt image
    console.log(
      "Editar Promt Image",
      editedName,
      editedImageType,
      editedImageCount,
      editedTags,
      editedResponse
    );
    onClose();
  };

  const handleDelete = () => {
    // Lógica para eliminar la información del promt image
    console.log("Eliminar Promt Image", name);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <h2>Correr Promt de imagenes</h2>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <select
          value={editedImageType}
          onChange={(e) => setEditedImageType(e.target.value)}
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
        <input
          type="number"
          min="1"
          max="10"
          onChange={(e) => setEditedImageCount(e.target.value)}
          value={temperature}
        />
        <TagsInput
          value={editedTags}
          onChange={setEditedTags}
          name="tags"
          placeHolder="agrega tags"
        />
        <textarea
          value={editedResponse}
          onChange={(e) => setEditedResponse(e.target.value)}
        />
        <div className="popup__buttons">
          <button onClick={handleEdit}>Run</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PromtImagePopup;
