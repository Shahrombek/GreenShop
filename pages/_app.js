import "../styles/globals.css";
import ThemeContext from "../Theme/ThemeContext";
import Head from "next/head";
import Logo from "../assets/logo.png";
import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ThemeContext("light")}>
      <Provider store={store}>
        <Box>
          <Head>
            <title>Green Shop</title>
            <meta name="description" content="Green Shop" />
            <link rel="icon" href={Logo.src} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Box>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
