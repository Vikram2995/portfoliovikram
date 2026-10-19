import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";
import MoonIcon from "../../assets/MoonIcon";


function ThemeSwitchButton() {
    return (
        <ListItem disablePadding>
  <ListItemButton
    onClick={() => {
      toggleTheme();
      handleDrawerToggle();
    }}
  >
    <ListItemIcon
      sx={{
        color: "inherit",
        minWidth: "2.5rem",
      }}
    >
      {theme === "light" ? (
        <MoonIcon />
      ) : (
          <MoonIcon />
        // <SunIcon />
      )}
    </ListItemIcon>

    <ListItemText
      primary={
        theme === "light"
          ? "Dark Mode"
          : "Light Mode"
      }
    />
  </ListItemButton>
</ListItem>
    );
}

export default ThemeSwitchButton;