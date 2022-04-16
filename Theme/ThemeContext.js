import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const ThemeContext = (Mode) =>
  createTheme({
    palette: {
      mode: Mode,
      primary: {
        main: "rgb(70, 163, 88)",
      },
      secondary: {
        main: "#9e9e9e",
      },
      text: {
        primary: "rgb(29, 36, 56)",
        secondary: "rgb(148, 164, 196)",
        disable: "(255, 255, 255, 0.5)",
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
    shape: {
      smallBorderRadius: 2,
      borderRadius: 4,
    },
  });

export default ThemeContext;
