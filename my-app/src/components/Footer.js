import * as React from "react";
import wendywhale from "./imgs/github.png";
import profileborder from "./imgs/ischool-logo.png";
const Footer = () => {
  return (
    <div className="foot-section">
      <span>Marine Rescue: The Sea-quel</span>
      <div className="foot-title">
        <span>Copyright FlapJack</span>
        <img className="i-school" src={require( "./imgs/github.png")} />
      </div>
      <img className="i-school" src={require("./imgs/ischool-logo.png")} />
    </div>
  );
};
export default Footer;




