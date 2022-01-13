import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//sweetAlert
import Swal from "sweetalert2";
// css
import "./style-login.css";
//axios
import Axios from "axios";
//Components
import Loader from "../Loader/Loader";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [authdata, setAuthData] = useState(initialState);
  const [showPass, setShowPass] = useState(false);
  const [loader, setLoader] = useState(false);
  const { username, password } = authdata;

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAuthData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    try {
      const response = await Axios({
        method: "post",
        url: "https://telecom.exactian.info/ws2/segfi/users/Login",
        data: {
          user_name: username,
          password: password,
        },
      });

      console.log(response.data);
      //save token and username in localstorage
      localStorage.setItem("userToken", response.data.response.token);
      localStorage.setItem("username", response.data.response.user_name);

      //redirect
      navigate("status-employee");
      setLoader(false);
    } catch (error) {
      const msgError = error.response.data.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msgError,
      });
      setLoader(false);
    }
  };

  function fcShowPassword() {
    var x = document.getElementById("myInput");
    var changeIcon = document.getElementById("iconPass");
    if (x.type === "password") {
      x.type = "text";
      setShowPass(true);
    } else {
      x.type = "password";
      setShowPass(false);
    }
  }
  return (
    <>
      <div className="container">
        {loader ? (
          <Loader />
        ) : (
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label for="exampleFormControlInput1" className="form-label">
                  Usuario
                </label>
                <div className="inline">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Usuario"
                    required
                    autoFocus
                    value={username}
                    onChange={handleInputChange}
                  />
                  <i id="iconPass" class="fas fa-user"></i>
                </div>

                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Contraseña
                </label>
                <div className="inline">
                  <input
                    type="password"
                    name="password"
                    id="myInput"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                    value={password}
                    onChange={handleInputChange}
                  />
                  {showPass ? (
                    <i
                      id="iconPass"
                      class="fas fa-eye"
                      onClick={fcShowPassword}
                    ></i>
                  ) : (
                    <i
                      id="iconPass"
                      class="fas fa-eye-slash"
                      onClick={fcShowPassword}
                    ></i>
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-login">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="container-login"></div>
      </div>
    </>
  );
};

export default Login;
