import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//css
import "./style-status.css";
//Axios
import Axios from "axios";
//SweetAlert
import { Toast } from "../../sweetAlert/toast";
//Components
import Employee from "../Employee/Employee";
import Loader from "../Loader/Loader";

const StatusEmployee = () => {
  const initialEmployee = {};
  const [dniData, setDniData] = useState("");
  const [DataEmployee, setDataEmployee] = useState(initialEmployee);
  const [msgSearch, setMgSearch] = useState(true);
  const [loader, setLoader] = useState(false);
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

  //Search employee with axios
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const urlGetEmployee =
      "https://telecom.exactian.info/ws2/segfi/employees/Employees";

    if (isNaN(dni)) {
      setLoader(false);
      return Toast.fire({
        icon: "error",
        title: "El DNI deber ser un número",
      });
    } else {
      try {
        const token = localStorage.getItem("userToken");
        const response = await Axios({
          method: "get",
          url: urlGetEmployee,
          params: {
            dni: dni,
          },
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response);
        if (response.data.response == "") {
          console.log("no tiene");
          setDataEmployee(response.data.response);
          setLoader(false);
          setMgSearch(false);
        } else {
          const msgSuccess = "Empleado encontrado!";
          Toast.fire({
            icon: "success",
            title: msgSuccess,
          });
          setDataEmployee(response.data.response[0]);
          setLoader(false);
          setMgSearch(false);
        }
      } catch (error) {
        const msgError = error.response.data.response.errors[0].message;
        Toast.fire({
          icon: "error",
          title: msgError,
        });
        setLoader(false);
      }
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem("userToken");
    //verify auth
    if (authToken == "") {
      console.log("No esta logeado");
      //redirect
      navigate("/");
    }
  });

  const logout = () => {
    //set empty token
    localStorage.setItem("userToken", "");
    //redirect
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand username">
              Usuario: <strong>{userName}</strong>
            </a>
            <div className="difStatus">
              <span><i class="fas fa-circle dif-color-0"></i> APTO</span>
              <span><i class="fas fa-circle dif-color-1"></i> APTO PARCIAL</span>
              <span><i class="fas fa-circle dif-color-2"></i> NO APTO</span>
            </div>
            <button
              className="btn btn-outline-danger"
              onClick={logout}
              type="submit"
            >
              Cerrar Sesion
            </button>
          </div>
        </nav>

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
              <button type="submit" className="btn btn-primary btn-login">
                Buscar Empleado
              </button>
            </div>
          </form>
        </div>

        {msgSearch ? (
          <div className="cont-employee">Busque al Empleado por DNI...</div>
        ) : (
          <div className="cont-employee">
            {Object.values(DataEmployee) == "" ? (
              <div class="alert alert-danger" role="alert">
                NO EXISTE EL EMPLEADO.
              </div>
            ) : (
              <Employee dataEm={DataEmployee} load={setLoader} />
            )}
          </div>
        )}
        {loader ? (
          <div className="cont-employee">
            <Loader />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default StatusEmployee;
