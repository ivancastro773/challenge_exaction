import React, { useState, useEffect } from "react";
import "./style-status.css";
import App from "../../App";
import Axios from "axios";
import Employee from "../Employee/Employee";

const StatusEmployee = () => {
  const initialEmployee = {};
  const [dniData, setDniData] = useState("");
  const [DataEmployee, setDataEmployee] = useState(initialEmployee);
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
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDIwNTIzNTksInN1YiI6ImNoZWNrdXAiLCJ0eXBlIjoiMyJ9.CXvkAFlIaJFUecqQDsFoA3oSrRtTXGHqn4Tb2lmHN1U";
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
      } else {
        setDataEmployee(response.data.response[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-status">
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label>DNI</label>
            <br />
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              required
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
      <div className="cont-employee">
        {Object.values(DataEmployee) == "" ? (
          "Busque al Empleado por DNI..."
        ) : (
          <Employee dataEm={DataEmployee} />
        )}
      </div>
    </>
  );
};
export default StatusEmployee;
