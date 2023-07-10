import React from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../components/navigation/navigationBar";
import Card from "../../components/card/card";
import "./homePage.scss";

const HomePage = () => {
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="home-page">
      <Navigation
        appName="AI Promts"
        userName={name}
        role={role}
        onLogout={handleLogOut}
      />
      <div className="home-page__content">
        <h2>Elementos</h2>
        <div className="home-page__card-container">
          <div className="home-page__card-item">
            <Card
              name="Elemento 1"
              type="Tipo 1"
              tags="Tag 1, Tag 2, Tag 3"
              isAdmin={false}
            />
          </div>
          <div className="home-page__card-item">
            <Card
              name="Elemento 2"
              email="prueba@email.com"
              status="active"
              isAdmin={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
