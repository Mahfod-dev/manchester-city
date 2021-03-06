import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { logout } from "../Utils/Firebase";

import { Link } from "react-router-dom";
import { CityLogo } from "../Utils/Tools";

import { useUserContext } from "../Utils/context";
import { showToastSuccess } from "../Utils/Tools";

const Header = () => {
  const user = useUserContext();

  console.log(user);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#98c5e9",
        boxShadow: "none",
        padding: "10px 0",
        borderBottom: "2px solid #00285e",
      }}
    >
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {user ? (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Button
              onClick={() => {
                showToastSuccess("Good Bye");
                logout();
              }}
              color="inherit"
            >
              Log out
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button color="inherit">Log In</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
