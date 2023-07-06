import React from "react";
import Navigation from "../../components/navigation/navigationBar";
import Card from "../../components/card/card";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navigation
        appName="AI Promts"
        userName="John Doe"
        role="User"
        onLogout={() => {
          // Lógica para cerrar sesión
          console.log("Cerrar sesión");
        }}
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
