import React, { useState } from "react";
import Button from "../button/button";
import UserPopup from "../popup/userPopup";
import PromtCompletionsPopup from "../popup/promtCompletionsPopup";
import PromtEditPopup from "../popup/promtEditPopup";
import PromtImagePopup from "../popup/promtImagePopup";

import "./card.scss";

const Card = ({ isAdmin, data }) => {
  const [userPopup, setUserPopup] = useState(false);
  const [promtEditPopup, setPromtEditPopup] = useState(false);
  const [promtCompletionsPopup, setPromtCompletionsPopup] = useState(false);
  const [promtImagesPopup, setPromtImagesPopup] = useState(false);

  const handleView = (type) => {
    switch (type) {
      case "edit":
        setPromtEditPopup(true);
        break;
      case "completions":
        setPromtCompletionsPopup(true);
        break;
      case "image":
        setPromtImagesPopup(true);
        break;
      default:
        setUserPopup(true);
        break;
    }
    // Lógica para observar el elemento
  };

  const onClosePopup = () => {
    setUserPopup(false);
    setPromtEditPopup(false);
    setPromtCompletionsPopup(false);
    setPromtImagesPopup(false);
  };

  const handleDelete = () => {
    // Lógica para eliminar el elemento
  };

  return (
    <div className="card">
      <div className="card__info">
        <h2 className="card__name">{data.name}</h2>
        {!isAdmin ? (
          <div className="card__user-info">
            <span className="card__type">{data.type}</span>
            <span className="card__tags">{data.tags}</span>
          </div>
        ) : (
          <div className="card__admin-info">
            <span className="card__email">{data.email}</span>
            <span className="card__status">{data.status}</span>
          </div>
        )}
      </div>
      <div className="card__buttons">
        <Button onClick={() => handleView(data.type)} icon="view" />
        <Button onClick={handleDelete} icon="delete" />
      </div>

      {userPopup && <UserPopup data={data} onClose={onClosePopup}/>}
      {promtCompletionsPopup && <PromtCompletionsPopup data={data} onClose={onClosePopup}/>}
      {promtEditPopup && <PromtEditPopup data={data} onClose={onClosePopup}/>}
      {promtImagesPopup && <PromtImagePopup data={data} onClose={onClosePopup} />}
    </div>
  );
};

export default Card;
