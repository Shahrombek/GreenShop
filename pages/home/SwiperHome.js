import { Box, Button, Grid, Typography } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import gul from "../../assets/gul.png";
import gul1 from "../../assets/gul1.png";
import gul2 from "../../assets/image 15.png";


const SwiperHome = () => {
    const swiper = [
        { small: gul1, big: gul },
        { small: gul1, big: gul },
        { small: gul1, big: gul },
      ];

  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {swiper.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                px: 3,
                py: 1,
                background:
                  "linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%)",
              }}
            >
              <Grid
                container
                spacing={0}
                sx={{
                  py: { xs: 3, sm: 2, md: 1, lg: 0 },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    flexDirection: "column",
                    pb: 5,
                    gap: "15px",
                    position: { xs: "absolute", md: "static" },
                    top: "20px",
                    left: { xs: "15px", md: "24px" },
                    zIndex: 100,
                    backdropFilter: { xs: "blur(2px)", md: "blur(0px)" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    Welcome to GreenShop
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "35px", sm: "50px", md: "70px" },
                      textTransform: "uppercase",
                      lineHeight: 1,
                      wordSpacing: "10px",
                    }}
                  >
                    Let’s Make a Better
                    <span
                      style={{
                        color: "rgb(70, 163, 88)",
                        marginLeft: "15px",
                      }}
                    >
                      Planet
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#727272",
                      mb: { xs: 3, sm: 4 },
                      width: { xs: "95%", sm: "80%", md: "100%" },
                    }}
                  >
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      background: "rgb(70, 163, 88)",
                      "&:hover": { background: "rgb(70, 163, 88)" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      }}
                    >
                      shop now
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "end",
                      justifyContent: { xs: "end", md: "center" },
                      mt: "-20px",
                    }}
                  >
                    <Box sx={{ mr: "-150px", mt: "-20px" }}>
                      <img src={item.small.src} alt="rose" />
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "300px", sm: "350px", md: "420px" },
                        mr: { xs: "-40px", sm: "-60px", md: "-20px" },
                      }}
                    >
                      <img
                        style={{ objectFit: "cover", width: "100%" }}
                        src={item.big.src}
                        alt="rose"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperHome;
