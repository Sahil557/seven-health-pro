// BlogPostItem.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostItem from './BlogPostItem'; // Adjust the import path based on your project structure

describe('BlogPostItem', () => {
  const mockArticle = {
    source: {
      id: null,
      name: 'Wall-street.ro',
    },
    author: 'office@wall-street.ro (Redactia Wall-Street)',
    title: 'S-a răzgândit. Elon Musk donează o sumă uriașă pentru campania lui Trump după tentativa de asasinat',
    description:
      'Multimiliardarul Elon Musk intenţionează să doneze 45 de milioane de dolari pe lună unui grup de susţinere a campaniei electorale a lui Donald Trump pentru preşedinţia Statelor Unite, relatează AFP, citată de Agerpres.',
    url:
      'https://www.wall-street.ro/articol/International/309457/s-a-razgandit-elon-musk-doneaza-o-suma-uriasa-pentru-campania-lui-trump-dupa-tentativa-de-asasinat.html',
    urlToImage: 'https://www.wall-street.ro/article_pictures/309457_articol.jpg?v=1721116840',
    publishedAt: '2024-07-16T08:00:00Z',
    content:
      'Multimiliardarul Elon Musk intenioneaz s doneze 45 de milioane de dolari pe lun unui grup de susinere a campaniei electorale a lui Donald Trump pentru preedinia Statelor Unite, relateaz AFP, citat de… [+3207 chars]',
  };

  it('renders BlogPostItem component with mock article data', () => {
    render(<BlogPostItem article={mockArticle} />);

    // Assertions based on your component's rendering logic
    const articleTitle = screen.getByText(/Elon Musk donează o sumă uriașă/i); // Adjust text to match your actual component rendering
    const articleDescription = screen.getByText(/Multimiliardarul Elon Musk intenţionează să doneze/i); // Adjust text accordingly
    const articlePublishedDate = screen.getByText('16 July 2024'); // Adjust date format and content based on your component

    expect(articleTitle).toBeInTheDocument();
    expect(articleDescription).toBeInTheDocument();
    expect(articlePublishedDate).toBeInTheDocument();
  });
});
