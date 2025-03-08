import React, { useState } from "react";
import "../authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err);
  const handleSuccess = (msg) =>{
    console.log("toast triggered");
    toast.success(msg);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://tradingapp-backend.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      console.log(success);
      if (success) {
        handleSuccess(message)
        setTimeout(() => {
          navigate("/summary");
        }, 1500);
      } else {
        console.log(message)
        handleError(message);
      }

    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="body-auth">
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label-class" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="label-class" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button className="button-auth" type="submit">Submit</button>
        <span className="span-auth">
          Don't Have an account? <Link className="a-auth" to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
