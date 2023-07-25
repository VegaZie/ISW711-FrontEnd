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
        <h2>Correr Promt de imagenes</h2>
        <label>Nombre</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <label>Tamaño</label>
        <select
          value={editedImageType}
          onChange={(e) => setEditedImageType(e.target.value)}
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
        <label>Numero de imagenes</label>
        <input
          type="number"
          min="1"
          max="10"
          onChange={(e) => setEditedImageCount(e.target.value)}
          value={editedImageCount}
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
        <img src={editedResponse} alt="Imagen creada mediante la el API de OpenAI"/>
        <div className="popup__buttons">
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Elimnar</button>
          <button onClick={handleCancel}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export default PromtImagePopup;
