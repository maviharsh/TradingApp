import React, { useState } from "react";
import "../authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err);
  const handleSuccess = (msg) =>
    toast.success(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/summary");
        }, 1000);

        setInputValue({
          ...inputValue,
          email: "",
          password: "",
          username: "",
        });
      } else {
        console.log(message);
        handleError("Something went wrong");
      }
    } catch (error) {
      console.log(error.response.data.message);
      handleError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="body-auth">
      <div className="form_container">
        <h2>Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label-class" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="label-class" htmlFor="email">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="label-class" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button className="button-auth" type="submit">
            Submit
          </button>
          <span className="span-auth">
            Already have an account?{" "}
            <Link className="a-auth" to={"/"}>
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
