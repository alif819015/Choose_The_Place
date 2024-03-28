"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Destinations",
    pathname: "/destinations",
  },
  {
    route: "Tours",
    pathname: "/tours",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Gallery",
    pathname: "/gallery",
  },
  {
    route: "Blog",
    pathname: "/blog",
  },
  {
    route: "Construct",
    pathname: "/construct",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container
        maxWidth="xl"
        sx={{
          fontFamily: "Raleway",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={logo} width={70} height={70} alt="logo" />
            <h1 className="uppercase text-2xl">Choose The Place</h1>
          </Box>
          <Box sx={{ flexGrow: 1, textAlign: { xs: "right", md: "center" } }}>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Tooltip title="Open menu">
                <IconButton onClick={toggleMenu} sx={{ p: 0 }} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Link key={item.route} href={item.pathname}>
                  <Button
                    style={{ textTransform: "capitalize", color:"white" }}
                    className=" text-white"
                  >
                    {item.route}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <List>
            {navItems.map((item) => (
              <Link key={item.route} href={item.pathname}>
                <ListItem>
                  <ListItemText primary={item.route} />
                </ListItem>
              </Link>
            ))}
            <ListItem>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
