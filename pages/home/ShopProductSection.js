import {
  Box,
  Grid,
  Typography,
  Slider,
  Button,
  IconButton,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Products, Categories } from "../../Data/ProductsData";
import superSale from "../../assets/shopimg/SuperSale.jpeg";
import greenBag from "../../assets/shopimg/greenBag.png";
import search from "../../assets/search.png";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const ShopProductSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const [num, setNum] = useState(0);
  const [value, setValue] = React.useState([0, 64]);
  const [prod, setProd] = useState([...Products, ...Products, ...Products]);
  var Product = prod;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(prod);
  console.log(Product);

  const Favorite = (item) => {
    console.log(Product);
    prod.map((e) =>
      e.title === item.title ? (item.favorite = !item.favorite) : ""
    );
    setProd(prod);
  };
  const currentOrders = Product;
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(width < 1200 ? 8 : 9);
  var pageNumbers = Math.ceil(currentOrders.length / ordersPerPage);
  if (Product.length >= 6) {
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    Product = currentOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  } else if (Product.length >= 1) {
    pageNumbers = 1;
  } else {
    pageNumbers = 0;
  }
  console.log(Product);

  return (
    <Box sx={{ my: 5, mb: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={3}>
          <Box sx={{ background: "#FBFBFB", p: 2, pb: "20px" }}>
            <Typography
              sx={{ fontSize: { xs: "16px", sm: "17px" }, fontWeight: 600 }}
            >
              Categories
            </Typography>
            {Categories.map((item, index) => {
              return (
                <Box
                  key={index}
                  onClick={() => setNum(index)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: "6px",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: num === index ? 500 : 400,
                      color: num === index ? "primary.main" : "",
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: num === index ? 500 : 400,
                      color: num === index ? "primary.main" : "",
                    }}
                  >
                    ({item.num})
                  </Typography>
                </Box>
              );
            })}

            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "17px" },
                fontWeight: 600,
                mt: "10px",
              }}
            >
              Price Range
            </Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              Price: &nbsp;{" "}
              <span style={{ color: "rgb(70, 163, 88)" }}>
                ${value[0] * 10} - ${value[1] * 10}
              </span>
            </Typography>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "white",
                background: "rgb(70, 163, 88)",
                "&:hover": { background: "rgb(70, 163, 88)" },
                px: 3,
                my: 1,
                borderRadius: "6px",
              }}
            >
              <Typography>Filter</Typography>
            </Button>

            <Typography
              sx={{ fontSize: { xs: "16px", sm: "17px" }, fontWeight: 600 }}
            >
              Size
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                Small
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                (119)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                Medium
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                (86)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                Large
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  py: "6px",
                  cursor: "pointer",
                }}
              >
                (78)
              </Typography>
            </Box>
          </Box>
          <img
            style={{
              width: "100%",
              marginLeft: "-0px",
              marginBottom: "-5px",
            }}
            src={superSale.src}
            alt="img"
          />
        </Grid>
        <Grid item xs={12} sm={7} md={9}>
          <Box>
            <Grid container spacing={3} sx={{ pt: 0 }}>
              {Product.map((item, index) => {
                return (
                  <Grid item xs={6} sm={12} md={6} lg={4} key={index}>
                    <Box
                      sx={{
                        background: "#FBFBFB",
                        height: { xs: "200px", sm: "300px" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        cursor: "pointer",
                        transition: "0.3s",
                        overflow: "hidden",
                        "&:hover": {
                          borderTop: "3px solid rgb(70, 163, 88)",
                          transition: "0.3s",
                        },
                        "&:hover div": {
                          transform: "translateY(0px)",
                          transition: "0.3s",
                        },
                      }}
                    >
                      <img
                        style={{
                          width: "80%",
                        }}
                        src={item.img.src}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          py: 1,
                          width: "100%",
                          transform: "translateY(50px)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                        }}
                      >
                        <Button
                          sx={{
                            minWidth: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        >
                          <img src={greenBag.src} />
                        </Button>
                        <Button
                          onClick={() => Favorite(item)}
                          sx={{
                            minWidth: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        >
                          {!item.favorite ? (
                            <FavoriteBorderOutlinedIcon
                              sx={{ color: "#3D3D3D" }}
                            />
                          ) : (
                            <FavoriteOutlinedIcon />
                          )}
                        </Button>
                        <Button
                          sx={{
                            minWidth: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        >
                          <img src={search.src} />
                        </Button>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        pt: "5px",
                        pl: "5px",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        pb: 1,
                        pl: "5px",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "primary.main",
                      }}
                    >
                      {" "}
                      ${item.price}.00
                    </Typography>
                  </Grid>
                );
              })}
              <Box
                sx={{
                  my: 3,
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Pagination
                  onChange={(e, page) => setCurrentPage(page)}
                  count={pageNumbers}
                  color="primary"
                  sx={{ color: "rgb(36, 153, 239)" }}
                ></Pagination>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopProductSection;
