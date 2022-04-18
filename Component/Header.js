import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import search from "../assets/search.png";
import savat from "../assets/savat.png";
import Logout from "../assets/Logout.png";
import Logo from "../assets/Logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const path = router.pathname;
  console.log(path.includes("shop"));
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        background: "white",
        zIndex: 10,
        boxShadow: "0px 20px 30px 0px rgba(255, 255, 255, 1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: { xs: "15px 0px", md: "15px 0px 0px 0px" },
          px: { xs: "20px", sm: 0 },
        }}
      >
        <Box onClick={() => router.push("/home")} sx={{ cursor: "pointer" }}>
          <Image src={Logo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { xs: "10px", md: "30px" },
          }}
        >
          <Typography
            onClick={() => router.push("/home")}
            sx={{
              fontSize: "15px",
              fontWeight: 600,
              borderBottom: path.includes("home")
                ? "3px solid rgb(70, 163, 88)"
                : "3px solid white",
              py: 2,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Home
          </Typography>
          <Typography
            onClick={() => router.push("/shop")}
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              borderBottom: path.includes("shop")
                ? "3px solid rgb(70, 163, 88)"
                : "3px solid white",
              py: 2,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Shop
          </Typography>
          <Typography
            onClick={() => router.push("/plantCare")}
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              borderBottom: path.includes("Plant")
                ? "3px solid rgb(70, 163, 88)"
                : "3px solid white",
              py: 2,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Plant Care
          </Typography>
          <Typography
            onClick={() => router.push("/blogs")}
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              borderBottom: path.includes("Blogs")
                ? "3px solid rgb(70, 163, 88)"
                : "3px solid white",
              py: 2,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Blogs
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            sx={{ minWidth: "35px", height: "35px", borderRadius: "50%" }}
          >
            <Image width="17px" height="17px" src={search} alt="search" />
          </Button>
          <Button
            sx={{ minWidth: "35px", height: "35px", borderRadius: "50%" }}
          >
            <Image width="22px" height="25px" src={savat} alt="search" />
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "white",
              background: "rgb(70, 163, 88)",
              "&:hover": { background: "rgb(70, 163, 88)" },
              px: 2,
              borderRadius: "6px",
            }}
          >
            <Image src={Logout} alt="logout" />
            <Typography sx={{ pl: 1 }}>login</Typography>
          </Button>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "rgb(70, 163, 88, 0.4)" }} />
    </Box>
  );
};

export default Header;
