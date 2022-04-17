import { Box } from "@mui/material";
import Layout from "../../Component/Layout";
import BlogPosts from "./BlogPosts";
import SwiperHome from "./SwiperHome";

const Prepare = () => {


  return (
    <Box sx={{ pt: 5 }}>
      <SwiperHome/>
      <BlogPosts/>
    </Box>
  );
};

const index = () => {
  return (
    <Layout>
      <Prepare />
    </Layout>
  );
};

export default index;
