import React, { useState, useEffect } from "react";
import BlogPostItem from "./BlogPostItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Paginator from "../common/Paginator";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Spinner from "../common/Spinner";
import CustomSnackBar from "../common/CustomSnackBar";

const BlogPostList = ({ posts, isLoading, isError, setIsError }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1
  );
  const postsPerPage = 12;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts?.length / postsPerPage);

  useEffect(() => {
    if (!location.state || location.state.currentPage === undefined) {
      navigate("/", { state: { currentPage: 1 } });
    }
  }, [location.state, navigate]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate("/", { state: { currentPage: page } });
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: "1",
          background: "#ddd",
          boxShadow: "0 15px 30px -6px rgb(120 93 251 / 12%)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "3.5rem",
            },
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          SEVENCORE TECHSTACK NEWS
        </Typography>
      </Box>
      <Box sx={{ padding: "30px" }}>
        {isLoading && <Spinner isLoading={isLoading} />}
        {isError && (
          <>
            <CustomSnackBar
              open={isError}
              state={"error"}
              handleClose={() => setIsError(false)}
            />
          </>
        )}
        <Grid container spacing={2}>
          {currentPosts?.map((post, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Link
                to={`/post/${indexOfFirstPost + index}`}
                state={{ currentPage }}
                style={{ textDecoration: "none" }}
              >
                <BlogPostItem post={post} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BlogPostList;
