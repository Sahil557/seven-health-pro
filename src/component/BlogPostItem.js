import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const BlogPostItem = ({ post }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 500,
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={post?.urlToImage}
          alt="green iguana"
        />
        <CardContent
          sx={{
            height: "calc(100% - 230px)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "Proxima Nova SemiBold",
              fontSize: "20px",
              lineHeight: "27px",
              fontWeight: "800",
              color: "#000000",
              height: "50px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {post?.title}
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flexGrow: 1,
            }}
            variant="body2"
            color="text.secondary"
          >
            {post?.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "600",
              color: "#757575",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              justifyContent: "center",
            }}
          >
            {new Date(post?.publishedAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
        <Button variant="outlined" size="large" color="primary">
          View Full News
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogPostItem;
