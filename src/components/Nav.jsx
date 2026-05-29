import "../styles/style1.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({ user }) {

   const [theme, setTheme] = useState("Light");

  function change() {
    let body = document.querySelector("body");
    body.classList.toggle("change");
    let btn = document.getElementById("btn");
    btn.classList.toggle("btn-color-change")
    console.log(btn);
    if (theme == "Light") setTheme("Dark");
    else setTheme("Light");
  }
  return (
    <nav style={{ position: "sticky", top: 0 }}>
      <div className="nav-container">
        <div
          style={{
            backgroundColor: "aqua",
            padding: "16px 20px",
            borderRadius: "20px",
          }}
        >
          <img
            src="media/images/icons/star.png"
            style={{ marginRight: "10px", width: "22px" }}
          />
          <img
            src="media/images/icons/Positivus.png"
            style={{ width: "150px" }}
          />
        </div>
        <div className="nav-list">
          <Link to="/Home">Home</Link>
          <Link to="/Team">Our Team</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Login">Login/{user}</Link>
          <Link
            to="/quote"
            style={{
              marginLeft: "20px",
              backgroundColor: "red",
              color: "rgb(0, 0, 0)",
            }}
          >
    
            Request a quote
          </Link>
                     <button className="theme-btn" id="btn" onClick={() => change()}>
        {theme}
      </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
