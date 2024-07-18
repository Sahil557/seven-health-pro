// BlogPostItem.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostItem from './BlogPostItem';

describe('BlogPostItem', () => {
  it('renders BlogPostItem component with mock data', () => {
    const mockPost = {
      title: 'Mock Article Title',
      description: 'Mock Article Description',
      publishedAt: '2024-07-18T12:00:00Z',
      urlToImage: 'mock-image-url.jpg',
    };

    render(<BlogPostItem post={mockPost} />);

    // Assert that the component renders with the correct mock data
    const articleTitle = screen.getByText(mockPost.title);
    const articleDescription = screen.getByText(mockPost.description);
    const articlePublishedDate = screen.getByText('7/18/2024'); // Example date format assertion

    expect(articleTitle).toBeInTheDocument();
    expect(articleDescription).toBeInTheDocument();
    expect(articlePublishedDate).toBeInTheDocument();

    // Add more specific assertions as per your component's behavior
  });

  // Add more tests for other scenarios as needed
});
