import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sign_UpNumber = () => {
  const navigate = useNavigate();
  const [inpval, setInpaval] = useState({
    Number: "",
    email: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setInpaval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { Number, email } = inpval;
    if (Number === "") {
      alert(" name field is requred!");
    } else if (Number.length < 10) {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else {
      console.log("user login succesfulyy");
      navigate("/Sign_UpPassword");
    }

    console.log("data added succesfully");

    localStorage.setItem("useryoutubes", JSON.stringify([...data, inpval]));
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
                    type="Number"
                    name="Number"
                    onChange={getdata}
                    placeholder="+880-1xxxxxxxxx"
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Write Email Address "
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
                <p>
                  <span className="button2">
                    &nbsp; &nbsp;
                    <NavLink style={{ textDecoration: "none" }} to="/Sign_Up">
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

export default Sign_UpNumber;
