import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

//   import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          className="cursor"
          sx={{ backgroundColor: "#EBC55A", justifyContent: "space-evenly" }}
        >
          <NavItem label="ראשי" to={ROUTES.ROOT} avatar={"/assets/6.png"} />
          <NavItem label="מידע" to={ROUTES.DETAILS} avatar={"/assets/2.png"} />
          <NavItem label="סרטים" to={ROUTES.MOVIE} avatar={"/assets/3.png"} />
          <NavItem label="אנימה" to={ROUTES.ANIME} avatar={"/assets/4.png"} />
          <NavItem label="משחקים" to={ROUTES.GAME} avatar={"/assets/5.png"} />
          <NavItem
            label="צוות האתר"
            to={ROUTES.ABOUT}
            avatar={"/assets/1.png"}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
