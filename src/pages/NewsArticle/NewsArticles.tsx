/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchArticlesDetails, fetchSports } from "../../context/NewsArticles/action";
import { useNewsArticleDetailDispatch, useNewsArticleState } from "../../context/NewsArticles/context";
import { NewsArticleDetailState } from "../../context/NewsArticles/type";
import { Link } from "react-router-dom";
import './NewsArticles.css';

const formatDateForPicker = (isoDate: string) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const NewsArticle = () => {
  const state: NewsArticleDetailState = useNewsArticleState();
  const { newsArticleDetails, isLoading, isError, errorMessage } = state;
  const articleDispatch = useNewsArticleDetailDispatch();

  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  useEffect(() => {
    fetchArticlesDetails(articleDispatch);
    fetchSports(articleDispatch);
  }, [articleDispatch]); // Added dependency array for useEffect

  if (isLoading) {
    return <div className="text-left p-4">Loading...</div>;
  }

  if (isError) {
    return <div className="text-left p-4">{errorMessage}</div>;
  }

  return (
    <div className="text-left content-start p-6 flex-shrink-0 w-full">
      <h1 className="text-3xl font-bold text-black mb-4">Trending News</h1>
      <div className="navbar">
        <button
          key={0}
          className={`navbar-item ${selectedSport === null ? 'active' : ''} font-bold`}
          onClick={() => setSelectedSport(null)}
        >
          All Sports
        </button>
        {state.sports && state.sports.map((sport: any) => (
          <button
            key={sport.id}
            className={`navbar-item ${selectedSport === sport.id ? 'active' : ''} font-bold`}
            onClick={() => setSelectedSport(sport.id)}
          >
            {sport.name}
          </button>
        ))}
      </div>
      {newsArticleDetails
        .filter((article) => (selectedSport === null ? true : article.sport.id === selectedSport))
        .map((article: any) => (
          <div key={article.id} className="news-article">
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <p>{formatDateForPicker(article.date)}</p>
              <Link to={`/articles/${article.id}`} className="block mt-4 text-blue-600 hover:underline">
                Read more...
              </Link>
            </div>
            <div className="article-image">
              <div style={{ paddingBottom: "100%" }}>
                <img src={article.thumbnail} alt="Article Thumbnail" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsArticle;
