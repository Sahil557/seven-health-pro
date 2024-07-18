import axios from "axios";
const fetchTeslaNews = async () => {
  const { REACT_APP_BASE_URL, REACT_APP_NEWS_API_KEY } = process.env;
  const BASE_URL = REACT_APP_BASE_URL;
  const API_KEY = REACT_APP_NEWS_API_KEY; 
  try {
    const response = await axios.get(
      `${BASE_URL}/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
};

export default fetchTeslaNews;
