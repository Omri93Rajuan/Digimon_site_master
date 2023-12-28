import {
    Box,
  } from "@mui/material";
  import React from "react";
  import {useNavigate } from "react-router-dom";
  
  export const Logo = () => {
    const navigate = useNavigate();
    return (
      <>
    
        <Box  >
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
            component="img"
            src="/assets/digimonHeader.png"
            alt="broken robot" 
            onClick={()=>navigate('/')}
            />
            
        </Box>
      </>
    );
  };
  export default Logo;
  