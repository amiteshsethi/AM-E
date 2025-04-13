import { useAuth } from "../context/Authcontext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavigationButton from "./shared/NavigationButton";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            marginRight: "auto",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link to={"/"}>
            <Typography>
              <span style={{ fontSize: "20px" }}>AM - E</span>
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          {auth?.isLoggedIn ? (
            <>
              <NavigationButton
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationButton
                bg="#51538f"
                textColor="white"
                to="/"
                text="Logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationButton
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationButton
                bg="#51538f"
                textColor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
