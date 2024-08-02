import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar sx={{bgcolor:"transparent" , boxShadow:"none" }}>
        <Toolbar sx={{ display:"flex" }}>
            <Link to={"/"} >
            <Typography sx={{ display: {md:"block" ,sm:"none" , xs:"none"} , mr : "auto" , fontWeight:"800" , textShadow : "2px 2px 20px #000"}}>
                <span style={{ fontSize : "20px"}}>
                    AM - E
                </span>
            </Typography>
            </Link>
        </Toolbar>
    </AppBar>
  )
}

export default Header