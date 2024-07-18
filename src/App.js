import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./component/BlogPostList";
import BlogPostDetails from "./component/BlogPostDetails";
import fetchTeslaNews from "./utils/fetchTeslaNews";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const newsData = await fetchTeslaNews();
        setPosts(newsData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <BlogPostList
                posts={posts}
                isLoading={isLoading}
                isError={isError}
                setIsError={setIsError}
              />
            }
          />
          <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
