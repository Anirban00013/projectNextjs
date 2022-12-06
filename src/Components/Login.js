import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sign_img from "./Sign_img";

const Login = () => {
  const Navigate = useNavigate();
  const [inpval, setInpaval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpaval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const getuserArrer = localStorage.getItem("useryoutuber");
    console.log(getuserArrer);
    const { email, password } = inpval;
    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 8) {
      alert("password length greater five");
    } else {
      if (getuserArrer && getuserArrer.length) {
        const userdata = JSON.parse(getuserArrer);
        const userlogin = userdata.filter((el, k) => {
          return el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");
          Navigate("/Home");
        }
      }
    }
  };
  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="">
            <Sign_img />
          </div>
          <div className="main_div ">
            <div className="box">
              <h1>Log in Form</h1>
              <form action="">
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Write Your Maill Address"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Write Password"
                  />
                  <p>Your password must be 8 character</p>
                </div>
                <div className="input-box button button:hover  ">
                  <Button
                    variant="primary"
                    className="button"
                    onClick={addData}
                    type="Log in"
                  >
                    Log in
                  </Button>
                </div>
                <p className="pt-5 text-center">
                  Don't have an Account?
                  <span>
                    &nbsp; &nbsp;
                    <NavLink to="/Sign_UP">SIGNUP HERE!</NavLink>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
