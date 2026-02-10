import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00927c", // Ensure this is correctly defined
    },
    secondary: {
      main: "#EAF0F1",
    },
  },
});

export default customeTheme;
