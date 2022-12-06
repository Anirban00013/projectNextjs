import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar>
        <div>
          <img src="./ultimate.png" style={{ maxWidth: 150 }} alt="" />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
