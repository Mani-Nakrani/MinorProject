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

const pages = ["Home", "About", "Gallary", "Contact", "My Orders"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FEF5EE",
        overflowX: "hidden", // 🔥 prevents horizontal scroll
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          sx={{
            px: { xs: 1, md: 3 },
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
        >
          {/* Logo */}
          <Link to="/Home">
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                height: 45,
                width: { xs: 100, md: 130 },
                maxWidth: "100%",
                ml:3
              }}
            />
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={(e) => setAnchorElNav(e.currentTarget)}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => setAnchorElNav(null)}
                >
                  <Link
                    to={`/${page}`}
                    style={{
                      textDecoration: "none",
                      color: "#666",
                      width: "100%",
                    }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 7,
              flexGrow: 1,
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            {pages.map((page) => (
              <Link key={page} to={`/${page}`} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#666",
                    fontSize: 16,
                    whiteSpace: "nowrap",
                    "&:hover": { color: "#CE3D3C" },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
            }}
          >
            <LogoutIcon
              sx={{
                color: "gray",
                display: { xs: "none", sm: "block" },
                mr:2
              }}
            />
            <ShoppingCartIcon sx={{ color: "gray",mr:2 }} />

            <Link to="/Reservation">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#CE3D3C",
                  height: 38,
                  width: { xs: 110, md: 150 },
                  fontSize: { xs: 12, md: 14 },
                  whiteSpace: "nowrap",
                  mr:2.5
                }}
              >
                Reservation
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
