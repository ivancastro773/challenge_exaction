import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// css
import "./style-login.css";
//axios
import Axios from "axios";
//antd
import { Input, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const user = {
    user_name: "checkup",
    password: "Exactian2021",
  };
  const [authdata, setAuthData] = useState(initialState);
  const [dataUser, setDataUser] = useState(user);
  const { email, password } = authdata;

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
    e.preventDefault();

    try {
      const response = await Axios({
        method: "post",
        url: "https://telecom.exactian.info/ws2/segfi/users/Login",
        data: {
          user_name: email,
          password: password,
        },
      });

      /* setUserData(response.data); */
      console.log(response.data.response);
      //redirect
      navigate("status-employee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label for="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email"
                required
                autoFocus
                value={email}
                onChange={handleInputChange}
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={handleInputChange}
              />
                <button type="submit" className="btn btn-primary btn-login">
                  Ingresar
                </button>
            </form>
          </div>
        </div>
        <div className="container-login"></div>
      </div>
    </>
  );
};

export default Login;
