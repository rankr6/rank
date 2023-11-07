/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { fetchArticlesDetails, fetchSports } from "../../context/NewsArticles/action";
import { useNewsArticleDetailDispatch, useNewsArticleState } from "../../context/NewsArticles/context";
import { NewsArticleDetailState } from "../../context/NewsArticles/type";
import { Link } from "react-router-dom";
import './NewsArticles.css';
import { useUserPreferenceDispatch } from "../../context/Preference/context";
import { fetchUserPreference } from "../../context/Preference/action";

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
  const [userPreferences, setUserPreferences] = useState({ sports: [], teams: [] });
  const articleDispatch = useNewsArticleDetailDispatch();
  const dispatch = useUserPreferenceDispatch();
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserPreference(dispatch);
        setUserPreferences(data.preferences);
        console.log('User preferences updated:', data.preferences);
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    }
    fetchData();
    fetchArticlesDetails(articleDispatch);
    fetchSports(articleDispatch);
  }, [articleDispatch, dispatch]);

  const sportsData = userPreferences.sports || [];

  if (isLoading) {
    return <div className="text-left p-4">Loading...</div>;
  }

  if (isError) {
    return <div className="text-left p-4">{errorMessage}</div>;
  }

  // Filter sports based on user preferences
  const filteredSports = state.sports.filter((sport) => sportsData.includes(Number(sport.id)));

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
        {filteredSports.length === 0 ? (
          state.sports.map((sport: any) => (
            <button
              key={sport.id}
              className={`navbar-item ${selectedSport === sport.id ? 'active' : ''} font-bold`}
              onClick={() => setSelectedSport(sport.id)}
            >
              {sport.name}
            </button>
          ))
        ) : (
          filteredSports.map((sport: any) => (
            <button
              key={sport.id}
              className={`navbar-item ${selectedSport === sport.id ? 'active' : ''} font-bold`}
              onClick={() => setSelectedSport(sport.id)}
            >
              {sport.name}
            </button>
          ))
        )}
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
