import React from "react";
import PropTypes from "prop-types";
import Button from "../button/button";

import "./card.scss";

const Card = ({ name, type, tags, email, status,isAdmin }) => {
  const handleView = () => {
    // Lógica para observar el elemento
    console.log("Observar", name);
  };

  const handleEdit = () => {
    // Lógica para editar el elemento
    console.log("Editar", name);
  };

  const handleDelete = () => {
    // Lógica para eliminar el elemento
    console.log("Eliminar", name);
  };

  return (
    <div className="card">
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        {isAdmin ? (
          <div className="card__admin-info">
            <span className="card__email">{email}</span>
            <span className="card__status">{status}</span>
          </div>
        ) : (
          <div className="card__user-info">
            <span className="card__type">{type}</span>
            <span className="card__tags">{tags}</span>
          </div>
        )}
      </div>
      <div className="card__buttons">
        <Button onClick={handleView} icon="view" />
        <Button onClick={handleEdit} icon="edit" />
        <Button onClick={handleDelete} icon="delete" />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

export default Card;
