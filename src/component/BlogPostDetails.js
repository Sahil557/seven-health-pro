import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts[id];

  if (!post) return <p>Post not found</p>;

  return (
    <Grid
      container
      direction="column"
      sx={{
        maxWidth: "100%",
        padding: "30px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Grid item sx={{ marginBottom: "22px" }}>
        <Button variant="contained" onClick={() => navigate(-1)}>
          <ArrowBackIcon /> Back
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
      </Grid>
      {post.urlToImage && (
        <Grid item display="flex" justifyContent="center">
          <img
            src={post.urlToImage}
            alt={post.title}
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      )}
      <Grid item>
        <Typography variant="body1" paragraph>
          {post.content}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BlogPostDetails;
