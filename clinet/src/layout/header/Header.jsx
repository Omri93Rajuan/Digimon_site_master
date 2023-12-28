import {
  Box
} from "@mui/material";
import React from "react";
import Logo from "./topNavbar/logo/Logo";
import Navbar from "./topNavbar/navbar/Navbar";
import NotLogged from "./topNavbar/loginBar/NotLogged";
import Logged from "./topNavbar/loginBar/Logged";
import { useUser } from "../../users/providers/UserProvider";
import { MenuProvider } from "./menu/MenuProvider";

export const Header = () => {
  const { user } = useUser();
  return (
    <>
    <MenuProvider>
      <Box sx={{
            backgroundImage: `url("/assets/bgHeader.png")`,
            background:`cover 100%`,
          }}>
  {!user && <NotLogged />}

{user && <Logged/>}    <Logo/>
    <Navbar/>
      </Box>
      </MenuProvider>
    </>
  );
};
export default Header;
