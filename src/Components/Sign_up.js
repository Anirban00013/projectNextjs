import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign_Up = () => {
  const navigate = useNavigate();
  const [inpval, setInpaval] = useState({
    firstName: "",
    lastName: "",
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
    console.log(inpval);

    const { firstName, lastName } = inpval;
    if (firstName === "") {
      alert("firstName field is requred!");
    } else if (lastName === "") {
      alert("lastName field is requred");
    } else {
      console.log("user login succesfulyy");
      navigate("/Sign_UpNumber");
    }

    console.log("data added succesfully");

    localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
  };
  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="">
            <Sign_img />
          </div>
          <div className="main_div">
            <div className="box">
              <h1>SignUp Form</h1>
              <form action="">
                <div className="input-box">
                  <input
                    type="firstName"
                    name="firstName"
                    onChange={getdata}
                    placeholder="Write First Name"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="lastName"
                    name="lastName"
                    onChange={getdata}
                    placeholder="Write Last Name"
                  />
                </div>
                <div className="input-box button button:hover  ">
                  <Button
                    variant="primary"
                    className="button"
                    onClick={addData}
                    type="Log in"
                  >
                    <span className="button"> Next step &#x2192;</span>
                  </Button>
                </div>
                <p className="pt-5 text-center">
                  Already have an Account?
                  <span>
                    &nbsp; &nbsp;
                    <NavLink to="/">Login Here!</NavLink>
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

export default Sign_Up;
