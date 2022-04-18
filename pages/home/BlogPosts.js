import { Box, Button, Grid, Typography } from "@mui/material";

import blog1 from "../../assets/01.png";
import blog2 from "../../assets/02.png";
import blog3 from "../../assets/03.png";
import blog4 from "../../assets/04.png";

import img14 from "../../assets/image 14.png";
import img15 from "../../assets/image 15.png";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const BlogPosts = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },
          mt: 10,
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "auto" },
            background: "#FBFBFB",
            p: 2,
            height: "200px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              mt: "-60px",
              width: { xs: "500px", sm: "30%", md: "90%", lg: "70%" },
              position: "relative",
              ml: { xs: "-20px", md: "-20px", lg: 0 },
            }}
          >
            <img
              style={{
                width: "100%",
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: -0,
              }}
              src={img14.src}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                my: 1,
                textAlign: "end",
              }}
            >
              Summer cactus & succulents
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                textAlign: "center",
                color: "#727272",
                mb: 3,
                width: { xs: "130%", sm: "100%" },
                ml: { xs: "-60px", sm: 0 },
                textAlign: "end",
              }}
            >
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </Typography>
            <Box sx={{ textAlign: "end" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  background: "rgb(70, 163, 88)",
                  "&:hover": { background: "rgb(70, 163, 88)" },
                  px: 2,
                  mb: 2,
                  borderRadius: "6px",
                }}
              >
                <Typography sx={{ pl: 1 }}>
                  find more{" "}
                  <ArrowForwardRoundedIcon
                    sx={{ fontSize: "22px", mb: "-6px" }}
                  />{" "}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "auto" },
            background: "#FBFBFB",
            p: 2,
            height: "200px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              mt: "-60px",
              width: { xs: "500px", sm: "30%", md: "90%", lg: "70%" },
              position: "relative",
              ml: { xs: "-20px", md: "-20px", lg: 0 },
            }}
          >
            <img
              style={{
                width: "100%",
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: -0,
              }}
              src={img15.src}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                my: 1,
                textAlign: "end",
              }}
            >
              Styling Trends & much more
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                textAlign: "center",
                color: "#727272",
                mb: 3,
                width: { xs: "130%", sm: "100%" },
                ml: { xs: "-60px", sm: 0 },
                textAlign: "end",
              }}
            >
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </Typography>
            <Box sx={{ textAlign: "end" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  background: "rgb(70, 163, 88)",
                  "&:hover": { background: "rgb(70, 163, 88)" },
                  px: 2,
                  mb: 2,
                  borderRadius: "6px",
                }}
              >
                <Typography sx={{ pl: 1 }}>
                  find more{" "}
                  <ArrowForwardRoundedIcon
                    sx={{ fontSize: "22px", mb: "-6px" }}
                  />{" "}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ my: 5 }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "26px" },
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Our Blog Posts
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "center",
            color: "#727272",
            mb: 4,
          }}
        >
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </Typography>
        <Grid container spacing={{ xs: 0, sm: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ background: "#FBFBFB" }}>
              <img style={{ width: "100%" }} src={blog1.src} />
              <Box sx={{ p: 2, pt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#46A358",
                    mt: "-5px",
                  }}
                >
                  September 12 I Read in 6 minutes
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                >
                  Cactus & Succulent Care Tips
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#727272",
                    my: 1,
                  }}
                >
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Read More
                  <ArrowForwardRoundedIcon
                    sx={{ mb: "-6px", fontSize: "20px" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ background: "#FBFBFB" }}>
              <img style={{ width: "100%" }} src={blog2.src} />
              <Box sx={{ p: 2, pt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#46A358",
                    mt: "-5px",
                  }}
                >
                  September 13 I Read in 2 minutes
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                >
                  Cactus & Succulent Care Tips
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#727272",
                    my: 1,
                  }}
                >
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Read More{" "}
                  <ArrowForwardRoundedIcon
                    sx={{ mb: "-6px", fontSize: "20px" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ background: "#FBFBFB" }}>
              <img style={{ width: "100%" }} src={blog3.src} />
              <Box sx={{ p: 2, pt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#46A358",
                    mt: "-5px",
                  }}
                >
                  September 15 I Read in 3 minutes
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                >
                  Cactus & Succulent Care Tips
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#727272",
                    my: 1,
                  }}
                >
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Read More{" "}
                  <ArrowForwardRoundedIcon
                    sx={{ mb: "-6px", fontSize: "20px" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ background: "#FBFBFB" }}>
              <img style={{ width: "100%" }} src={blog4.src} />
              <Box sx={{ p: 2, pt: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#46A358",
                    mt: "-5px",
                  }}
                >
                  September 15 I Read in 2 minutes
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "start",
                  }}
                >
                  Cactus & Succulent Care Tips
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#727272",
                    my: 1,
                  }}
                >
                  Cacti are succulents are easy care plants for any home or
                  patio.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Read More{" "}
                  <ArrowForwardRoundedIcon
                    sx={{ mb: "-6px", fontSize: "20px" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlogPosts;
