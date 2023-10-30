import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../img/logo.svg"
import {Link} from "react-router-dom"
import './nav.css'
import { Stack } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  <Link to="/" className="btn-Sm" >Home</Link>,
  <Link to="/Movies"  className="btn-Sm">Movies</Link>,
  <Link to="/TVShows"  className="btn-Sm">TV Shows</Link>,
  <Link to="/LogIn"  className="btn-Sm">LogIn</Link>,


];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src={logo}   className="Logo"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        <Box sx={{ display: "flex"}} >
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
                <img src={logo} alt="aaa"  className="Logo"
                
                sx={{ mr: 2, display: { sm: "none" } }}
                />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
              </Typography>
         
              <Stack direction='row' spacing={2} sx={{ display: { xs: "none", sm: "block" } }} >
              <Link to="/" className="btn">Home</Link>
              <Link to="/Movies" className="btn">Movies</Link>
              <Link to="/TVShows" className="btn">TV Shows</Link>
              <Link to="/LogIn" className="btn">LogIn</Link>

              </Stack>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
              
            </Drawer>
          </nav>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
          </Box>
        </Box>
    </>
  );
};

export default NavBar;
