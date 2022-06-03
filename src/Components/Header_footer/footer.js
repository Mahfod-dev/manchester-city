import React from "react";
import { CityLogo } from "../Utils/Tools";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
      </div>
      <div className="footer_desc1">Manchester city</div>
    </footer>
  );
};

export default Footer;
