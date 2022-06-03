import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import mcityLogo from "../../Resources/images/logos/manchester_city_logo.png";

export const CityLogo = ({ link, linkTo, width, height }) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${mcityLogo}) no-repeat`,
      }}
    ></div>
  );

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

export const showToastError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,

    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const showToastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    className: "black-background",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
