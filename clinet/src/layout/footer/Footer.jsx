import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Paper sx={{ backgroundColor: "#EBC55A" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", color: "white" }}
        >
 © כל הזכויות שמורות לקבוצת דיג'ימון ישראל 2023 </Typography>
      </Paper>
    </>
  );
};

export default Footer;
