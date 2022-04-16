import { Box, ThemeProvider} from "@mui/material";
import ThemeContext from "../Theme/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={ThemeContext("light")}>
      <Box sx={{ maxWidth: "1920px", m: "0 auto", px: {xs:'20px', sm:'50px', md:"70px"} }}>
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
