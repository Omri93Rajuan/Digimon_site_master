import { Paper } from "@mui/material";

const Main = ({ children }) => {
  return <>
    <Paper
      sx={{
        minHeight: "86vh",
        backgroundColor:'#716CAF'
      }}
    >
      {children}
    </Paper>
</>
}



export default Main;