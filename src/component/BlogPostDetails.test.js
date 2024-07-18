import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BlogPostDetails from './BlogPostDetails';

const mockPosts = [
  { id: 1, title: 'First Post', content: 'Content of the first post' },
  { id: 2, title: 'Second Post', content: 'Content of the second post' },
];

test('renders "Post not found" when post does not exist', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/post/3']}>
      <Routes>
        <Route path="/post/:id">
          <BlogPostDetails posts={mockPosts} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  expect(getByText('Post not found')).toBeInTheDocument();
});
