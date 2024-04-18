import "./App.css";
import { useState } from "react";
import ArticleList from "../ArticleList/ArticleList.jsx";
import { ArticlesWithTopic } from "../../api.js";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Player from "../Player/Player.jsx";
const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(articles);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);
  //       const data = await ArticlesWithTopic("");
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  const hendleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await ArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Articles</h1>
      <SearchForm onSearch={hendleSearch} />

      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Oops! Somthing went wrong! Please try reloading this page</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {/* <ArticleList items={articles} /> */}

      <Player source="<http://media.w3.org/2010/05/sintel/trailer.mp4>" />
    </div>
  );
};

export default App;
