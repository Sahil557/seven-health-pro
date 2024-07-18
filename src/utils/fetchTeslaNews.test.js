import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchTeslaNews from './fetchTeslaNews';

const API_KEY = '0285ba9f811042fdafc6de5e962e31f9';
const BASE_URL = 'https://newsapi.org/v2';

describe('fetchTeslaNews', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should fetch Tesla news articles successfully', async () => {
    const mockResponse = {
      articles: [
        {
          source: { id: null, name: 'Example Source' },
          author: 'John Doe',
          title: 'Tesla News 1',
          description: 'Description of Tesla News 1',
          url: 'http://example.com/tesla-news-1',
          urlToImage: 'http://example.com/tesla-news-1.jpg',
          publishedAt: '2024-06-18T00:00:00Z',
          content: 'Content of Tesla News 1',
        },
      ],
    };

    mock.onGet(`${BASE_URL}/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=${API_KEY}`).reply(200, mockResponse);

    const articles = await fetchTeslaNews();

    expect(articles).toEqual(mockResponse.articles);
  });

  it('should handle errors when fetching Tesla news articles', async () => {
    mock.onGet(`${BASE_URL}/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=${API_KEY}`).reply(500);

    await expect(fetchTeslaNews()).rejects.toThrow('Request failed with status code 500');
  });
});
