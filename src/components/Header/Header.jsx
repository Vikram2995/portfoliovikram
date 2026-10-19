import { useState } from "react";

import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";
import HeaderStyles from "./Header.styles";
import MenuIcon from "@mui/icons-material/Menu";


import { NavLink } from "react-router-dom";
import { LOGO } from "../../assets";
import ThemeSwitchButton from "./ThemeSwitch";

import Sign from "../CTA/Sign";
import Login from "../CTA/Login";
import NAV_HOME from "../../assets/images/nav-home.webp";
import NAV_ABOUT from "../../assets/images/nav-about.webp";
import NAV_SKILLS from "../../assets/images/nav-skills.webp";
import NAV_PROJECTS from "../../assets/images/nav-projects.webp";
import NAV_EXPERIENCE from "../../assets/images/nav-experience.webp";
import NAV_CONTACT from "../../assets/images/nav-contact.webp"; 

import typography from "../../theme/typography";

function Header({ toggleTheme, theme, changeLanguage, currentLanguage }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    const navItems = [
       { label: "Home", path: "/", image: NAV_HOME },
        { label: "About", path: "/about", image: NAV_ABOUT, },
        { label: "Skills", path: "/services", image: NAV_SKILLS, },
        { label: "Projects", path: "/pricing", image: NAV_PROJECTS, },
        { label: "Experience", path: "/faqs", image: NAV_EXPERIENCE, },
        { label: "Contact", path: "/contact", image: NAV_CONTACT, },
    ];

    return (
        <>
            <AppBar
                elevation={1}
                sx={HeaderStyles}

            >
                <Box className="ContainerCustom">
                    <Toolbar
                        disableGutters

                    >
                        {/* Logo */}
                        <Box
                            className="logo"
                            component="img"
                            src={LOGO}
                            alt="Logo"
                            sx={{
                                cursor: "pointer",
                            }}
                        />

                        {/* Desktop Navigation */}
                        <Box className="nav-links"
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                gap: "1rem",
                                alignItems: "center",
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={NavLink}
                                    to={item.path}
                                    end={item.path === "/"}
                                    sx={{
                                        color: "#fff",
                                        textTransform: "none",
                                        //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        minWidth: "100px",
                                        minHeight: "45px",

                                        "&.active": {
                                            color: "#fff",
                                            fontWeight: 600,
                                        },
                                    }}
                                >
                                   <span style={{ position: "absolute", zIndex: "1" }}>{item.label}</span>
                                      {item.image && (
                                        <Box className="nav-image"
                                            component="img"
                                            src={item.image}
                                            alt={item.label}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                      )}
                                </Button>
                            ))}



                        </Box>
                        <Box className="nav-actions" >

                            {/* <Button
                                onClick={toggleTheme}
                                variant="outlined"
                                size="small"
                                sx={{
                                    borderColor: "#E2E2E2",
                                    color: "var(--text)",
                                    minWidth: "2.5rem",
                                    height: "2.5rem",
                                    padding: "0",
                                    borderRadius: "50%",
                                }}
                            >
                                {theme === "light" ? "🌙" : "☀️"}
                            </Button> */}

                            {/* <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                 <Login
                                    text="Login"
                                    variant="contained"
                                />
                                <Sign
                                    text="Sign Up"
                                    variant="contained"
                                />
                            </Box> */}
                            {/* <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                Sign Up
                            </Button> */}

                        </Box>
                        {/* Mobile Menu Button */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none",
                                },
                                color: "var(--text)",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Box>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <Box
                    sx={{
                        width: "18rem",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        height: "100%",
                    }}
                >
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    component={NavLink}
                                    to={item.path}
                                    end={item.path === "/"}
                                    onClick={handleDrawerToggle}

                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {/* <ThemeSwitchButton /> */}
                        {/* <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    toggleTheme();
                                    handleDrawerToggle();
                                }}
                            >
                                <ListItemText
                                    primary={
                                        theme === "light"
                                            ? "🌙 Dark Mode"
                                            : "☀️ Light Mode"
                                    }
                                />
                            </ListItemButton>
                        </ListItem> */}

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleDrawerToggle}>
                                <ListItemText primary="Login" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={handleDrawerToggle}>
                                <ListItemText primary="Sign Up" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Header;