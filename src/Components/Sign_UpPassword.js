import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign_UpPassword = () => {
  const navigate = useNavigate();

  const [inpval, setInpaval] = useState({
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInpaval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { password } = inpval;
    if (password === "") {
      alert("password field is requred");
    } else if (password.length < 8) {
      alert("password length must be eight");
    } else {
      console.log("user login succesfulyy");
      navigate("/Home");
    }

    console.log("data added succesfully");

    localStorage.setItem("useryoutuber", JSON.stringify([...data, inpval]));
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
              <h1>SignUp Form</h1>
              <form action="">
                <div className="input-box">
                  <input
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Write Your Password"
                  />
                  <p>Your password Must be 8 character</p>
                </div>

                <div className="input-box button button:hover  ">
                  <Button
                    variant="primary"
                    className="button"
                    onClick={addData}
                    type="Log in"
                  >
                    <span className="button"> SignUp</span>
                  </Button>
                </div>
                <p>
                  <span className="button2">
                    &nbsp; &nbsp;
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/Sign_UpNumber"
                    >
                      Back
                    </NavLink>
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
export default Sign_UpPassword;
