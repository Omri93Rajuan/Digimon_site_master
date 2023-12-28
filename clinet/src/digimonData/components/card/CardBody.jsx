import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import cardType from "../../models/types/cardType";
import {
  Avatar,
  CardMedia,
  ImageList,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const CardBody = ({ card }) => {
  const { name, nameInEn, type, level, image } = card;
  const { url, alt } = image;

  return (
    <TableContainer component={Paper}>
    <Table  size="small" aria-label="a dense table">
      <TableHead>
        <TableRow sx={{display:'flex', flexDirection:'column'}} >
        <TableCell align="right"><img src="url" alt="alt"></TableCell>
          <TableCell align="right">{name}</TableCell>
          <TableCell align="right">{level}</TableCell>
        </TableRow>
      </TableHead>
    
    </Table>
  </TableContainer>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
