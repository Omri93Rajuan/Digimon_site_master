import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const DetailsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        className="cursor"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "86vh",
        }}
      >
        <Box className="cool">
          <img
            src={"/assets/warg.png"}
            alt={`digimon`}
            style={{ height: "500px", width: "350px" }}
            onClick={() => navigate(ROUTES.DIGIMON)}
          />
        </Box>
        <Box className="cool">
          <img
            src={"/assets/digivice.png"}
            alt={`digimon`}
            style={{ height: "150px", width: "150px" }}
            onClick={() => navigate(ROUTES.DIGIVICE)}
          />
        </Box>
        <Box className="cool center">
          <img
            src={"/assets/tai.png"}
            alt={`digimon`}
            style={{ height: "500px", width: "400px" }}
            onClick={() => navigate(ROUTES.DIGIDESTINED)}
          />
        </Box>
      </Box>
    </>
  );
};

export default DetailsPage;
