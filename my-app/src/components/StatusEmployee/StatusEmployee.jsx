import React, { useState, useEffect } from "react";
import "./style-status.css";
import App from "../../App";
import Axios from "axios";
import Employee from "../Employee/Employee";
import { useNavigate } from "react-router-dom";

const StatusEmployee = () => {
  const initialEmployee = {};
  const [dniData, setDniData] = useState("");
  const [DataEmployee, setDataEmployee] = useState(initialEmployee);
  const [msgSearch, setMgSearch] = useState(true);
  const userName = localStorage.getItem("username");
  const { dni } = dniData;
  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setDniData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("userToken");
      const response = await Axios({
        method: "get",
        url: "https://telecom.exactian.info/ws2/segfi/employees/Employees",
        params: {
          dni: dni,
        },
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      if (response.data.response == "") {
        console.log("no tiene");
        setDataEmployee(response.data.response);
        setMgSearch(false);
      } else {
        setDataEmployee(response.data.response[0]);
        setMgSearch(false);
      }
    } catch (error) {
      const msgError = error.response.data.response.errors[0].message;
      console.log(error.response.data.response.errors[0].message);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("userToken");
    if (authToken == "") {
      console.log("sin login");
      //redirect
      navigate("/");
    }
  });
  const logout = () => {
    localStorage.setItem("userToken", "");
    //redirect
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Usuario: {userName}</a>
          <button class="btn btn-outline-danger" onClick={logout} type="submit">
            Cerrar Sesion
          </button>
        </div>
      </nav>
      <div className="background">
        <div className="container-status">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label>DNI</label>
              <br />
              <input
                type="text"
                name="dni"
                placeholder="DNI"
                className="form-control"
                autoFocus
                value={dni}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </form>
        </div>
        {msgSearch ? (
          <div className="cont-employee">Busque al Empleado por DNI...</div>
        ) : (
          <div className="cont-employee">
            {Object.values(DataEmployee) == "" ? (
              "NO EXISTE EL EMPLEADO."
            ) : (
              <Employee dataEm={DataEmployee} />
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default StatusEmployee;
