import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";

// import images
import Logo from "../assets/Logo.png";
import g1 from "../assets/Group 20.png";
import g2 from "../assets/Group 21.png";
import g3 from "../assets/Group 22.png";
import gf from "../assets/image 16.png";
import Image from "next/image";

// Material Icons
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box sx={{ background: "#FBFBFB", mt: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "auto" },
            flex: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              flex: 1,
              width: { xs: "60%", sm: "auto" },
              borderRight: { xs: "0", sm: "1px solid rgb(70, 163, 88, 0.1)" },
              m: 3,
              textAlign: "center",
            }}
          >
            <img style={{ width: "100%" }} src={g3.src} alt="rose" />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: { xs: "60%", sm: "auto" },
              borderRight: { xs: "0", sm: "1px solid rgb(70, 163, 88, 0.1)" },
              m: 3,
              pr: 2,
              textAlign: "center",
            }}
          >
            <img style={{ width: "100%" }} src={g2.src} alt="rose" />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: { xs: "60%", sm: "auto" },
              m: 3,
              pr: 2,
              textAlign: "center",
            }}
          >
            <img style={{ width: "100%" }} src={g1.src} alt="rose" />
          </Box>
        </Box>
        <Box sx={{ flex: 2, mb: { xs: 3, lg: 0 }, px: { xs: 4, lg: 0 } }}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Would you like to join newsletters?
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
              borderRadius: "6px",
              background: "transparent",
              display: "flex",
              width: "90%",
              boxShadow: "0px 0px 15px 0px rgba(34, 60, 80, 0.15)",
              mt: 2,
              mb: "16px",
            }}
          >
            <input
              onChange={(e) => handleChange(e)}
              value={value}
              style={{
                flex: 1,
                width: "100%",
                border: "none",
                outline: "none",
                borderRadius: "6px 0px 0px 6px",
                fontFamily: "'Poppins', sans-serif",
                padding: "12px",
              }}
              placeholder="enter your email address..."
            />
            <Button
              type="submit"
              sx={{
                width: "80px",
                textTransform: "capitalize",
                color: "white",
                background: "rgb(70, 163, 88)",
                "&:hover": { background: "rgb(70, 163, 88)" },
                borderRadius: "0px 6px 6px 0px",
              }}
            >
              Join
            </Button>
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              width: "95%",
              color: "#737373",
              lineHeight: 1.7,
            }}
          >
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgb(70, 163, 88, 0.4)" }} />
      <Box
        sx={{
          background: "rgb(70, 163, 88, 0.1)",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "start", sm: "center" },
            width: { xs: "250px", sm: "auto" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "15px", md: "0" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: { xs: "start", sm: "center" },
              width: { xs: "100%", md: "auto" },
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "15px", md: "0" },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Image src={Logo} alt="logo" />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <FmdGoodOutlinedIcon sx={{ color: "primary.main" }} />
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, maxWidth: "200px" }}
              >
                Yunusabad District, Amir Temur Avenue
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: { xs: "start", sm: "center" },
              width: { xs: "100%", md: "auto" },
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "15px", md: "0" },
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <MailOutlinedIcon sx={{ color: "primary.main" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                shahromfozilov02@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <WifiCalling3RoundedIcon sx={{ color: "primary.main" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                +998 (94) 651 33 02
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "rgb(70, 163, 88, 0.4)" }} />

      <Box sx={{ display: "flex", alignItems: "start", flexDirection: {xs:'column', md:'row'}}}>
        <Box sx={{flex:1, display: "flex", alignItems: "start", width:{xs:'100%', md:'auto'} }}>
          <Box sx={{ flex: 1, px: 2, py: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, py: "5px" }}>
              My Account
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              My Account
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Our stores
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Contact us
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Career
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Specials
            </Typography>
          </Box>
          <Box sx={{ flex: 1, px: 2, py: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, py: "5px" }}>
              Help & Guide
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Help Center
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              How to Buy
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Shipping & Delivery
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Product Policy
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              How to Return
            </Typography>
          </Box>
        </Box>
        <Box sx={{flex:1, display: "flex", alignItems: "start", width:{xs:'100%', md:'auto'} }}>
          <Box sx={{ flex: 1, px: 2, py: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, py: "5px" }}>
              Categories
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              House Plants
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Potter Plants
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Seeds
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Small Plants
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 400, py: "5px" }}>
              Accessories
            </Typography>
          </Box>
          <Box sx={{ flex: 1, px: 2, py: 3 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, py: "5px" }}>
              Social Media
            </Typography>
            <Box
              sx={{
                my: 2,
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                gap:'10px'
              }}
            >
              <Button
                sx={{
                  minWidth: { xs:'20px', sm:"30px"},
                  border: "1px solid rgb(70, 163, 88, 0.3)",
                  borderRadius: "6px",
                  display:{xs:'none', sm:'inline-flex'}
                }}
              >
                <FacebookIcon />
              </Button>
              <Button
                sx={{
                  minWidth: "30px",
                  border: "1px solid rgb(70, 163, 88, 0.3)",
                  borderRadius: "6px",
                }}
              >
                <InstagramIcon />
              </Button>
              <Button
                sx={{
                  minWidth: "30px",
                  border: "1px solid rgb(70, 163, 88, 0.3)",
                  borderRadius: "6px",
                }}
              >
                <TwitterIcon />
              </Button>
              <Button
                sx={{
                  minWidth: "30px",
                  border: "1px solid rgb(70, 163, 88, 0.3)",
                  borderRadius: "6px",
                  display:{xs:'none', sm:'inline-flex'}
                }}
              >
                <LinkedInIcon />
              </Button>
              <Button
                sx={{
                  minWidth: "30px",
                  border: "1px solid rgb(70, 163, 88, 0.3)",
                  borderRadius: "6px",
                }}
              >
                <YouTubeIcon />
              </Button>
            </Box>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, py: "5px" }}>
              We accept
            </Typography>
            <Box>
              <img style={{width: "70%"}} src={gf.src} alt="footer" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "rgb(70, 163, 88, 0.4)" }} />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          py: "5px",
          textAlign: "center",
          py: 3,
          background: "white",
        }}
      >
        © 2022 Created by Shakhrombek.{" "}
        <span style={{ color: "rgb(70, 163, 88)", fontWeight: 500 }}>
          GreenShop
        </span>{" "}
        All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
