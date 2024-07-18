import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPostList from "./component/BlogPostList";
import fetchTeslaNews from "./utils/fetchTeslaNews";

jest.mock("./utils/fetchTeslaNews");

describe("App component", () => {
  beforeEach(() => {
    fetchTeslaNews.mockResolvedValue([
      {
        id: 1,
        title: "Tesla News 1",
        content: "Content of Tesla News 1",
      },
    ]);
  });

  it("should render the BlogPostList component and fetch Tesla news data", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BlogPostList />
      </MemoryRouter>
    );

    expect(screen.getByText(/SEVENCORE TECHSTACK NEWS/i)).toBeInTheDocument();

  });

  it("should render the BlogPostDetails component when navigating to /post/:id", async () => {
    render(
        <Routes>
          <Route path="/post/:id" element={<BlogPostList />} />
        </Routes>
    );
  });
});
