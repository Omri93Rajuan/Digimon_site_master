import React from "react";
import CardMedia from "@mui/material/CardMedia";

const CardHead = ({ image }) => {
  const { url, alt } = image;
  return <CardMedia component="img" height="50" image={url} alt={alt} />;
};

CardHead.propTypes = {
};

export default CardHead;
