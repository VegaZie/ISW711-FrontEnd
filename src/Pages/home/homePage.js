import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navigation from "../../components/navigation/navigationBar";
import Card from "../../components/card/card";
import Spinner from "../../components/spinner/spinner";
import ErrorMessage from "../../components/error/errorMessage";
import "./homePage.scss";

const HomePage = () => {
  // Declaración del estado dataList usando useState
  const [dataList, setDataList] = useState([]);

  // Obtebenos el token, nombre, rol y userID del sessionStorage
  const token = sessionStorage.getItem("token");
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const userID = sessionStorage.getItem("id");

  // Convertimos el rol a un valor booleano para userRole
  const userRole = role === "admin";

  //Manejo de errores
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAcceptError = () => {
    setError(false);
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (userRole) {
      axios
        .get(process.env.REACT_APP_USER, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          // handle success
          setDataList(response.data);
        })
        .catch(function (error) {
          setErrorMessage("Algo a salido mal " + error);
          setError(true);
        });
    } else {
      axios
        .get(process.env.REACT_APP_PROMTS + `?userID=${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          // handle success
          setDataList(response.data);
        })
        .catch(function (error) {
          setErrorMessage("Algo a salido mal " + error);
          setError(true);
        });
    }
  }, [userID, userRole, token]);
  return (
    <div className="home-page">
      <Navigation
        appName="AI Promts"
        userName={name}
        role={role}
        onLogout={handleLogOut}
      />
      {dataList.length > 0 ? ( // Verificar si dataList tiene datos
        <div className="home-page__content">
          <h2>Elementos</h2>
          <div className="home-page__card-container">
            {userRole ? (
              <div className="home-page__card-item">
                {dataList.map((item, index) => (
                  <Card
                    key={index}
                    id={item._id}
                    name={item.name}
                    email={item.email}
                    status={item.verified}
                    isAdmin={userRole}
                  />
                ))}
              </div>
            ) : (
              <div className="home-page__card-item">
                {dataList.map((item, index) => (
                  <Card
                    key={item._id}
                    id={item._id}
                    name={item.name}
                    type={item.type}
                    tags={item.tags}
                    isAdmin={userRole}
                    data={item}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}

      {error && (
        <ErrorMessage message={errorMessage} onAccept={handleAcceptError} />
      )}
    </div>
  );
};

export default HomePage;
