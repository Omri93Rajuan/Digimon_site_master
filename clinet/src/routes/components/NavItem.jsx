import React from "react";
import { string, object } from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavBarLink from "./NavBarLink";

const NavItem = ({ to, label, sx,avatar }) => {
  return (
    <>  
    <NavBarLink to={to} sx={sx}>

      <Button color="inherit">
      <img
    src={avatar}
    alt={`digimon number ${avatar}`}
    style={{ height: "70px", width:'70px',display:!avatar?'none':'block'}}
    
  />
        <Typography
          style={{
            textDecorationLine: "none",
            color: "white",
            fontSize: 20,
            fontFamily: "'Secular One', sans-serif",
          }}
        >
          {label}
        </Typography>
      </Button>
      
    </NavBarLink>
    </>
  );
};

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object.isRequired,
};

NavItem.defaultProps = {
  sx: { color: "#fff", textDecorationLine: "none" },
};

export default NavItem;
