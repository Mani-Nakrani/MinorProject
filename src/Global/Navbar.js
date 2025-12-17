import { Box } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../Assets/images/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const pages = [
  "Home ",
  "About",
  "Gallary",
  "Contact",
  "My Orders",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FEF5EE" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/Home"}>
            <img
              src={logo}
              style={{ marginLeft: "30px", height: 50, width: 130 }}
            ></img>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#666666",
                    display: "block",
                    fontSize: "16px",
                    "&:hover": { color: "#CE3D3C" },
                    transition: ".2s",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <LogoutIcon
            sx={{ color: "gray", mr: 8 }}
            style={{ cursor: "pointer" }}
          />
          <ShoppingCartIcon sx={{ color: "gray", mr: 8 }} />
          <Link to={'/Reservation'}>
            <Button
          variant="contained"
          sx={{
            backgroundColor: "#CE3D3C",
            color: "white",
            height: 40,
            width: 150,
            mr:4
          }}
        >
         Reservation
        </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
