/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { fetchArticlesDetails, fetchSports } from "../../context/NewsArticles/action";
import { useNewsArticleDetailDispatch, useNewsArticleState } from "../../context/NewsArticles/context";
import { NewsArticleDetailState } from "../../context/NewsArticles/type";
import { Link } from "react-router-dom";
import './NewsArticles.css';

// Utility function to format the date
const formatDateForPicker = (isoDate: string) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Format the date as per the required format for the date picker (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};

const NewsArticle = () => {
  const state: NewsArticleDetailState = useNewsArticleState();
  const { newsArticleDetails, isLoading, isError, errorMessage } = state;
  const articleDispatch = useNewsArticleDetailDispatch();

  // State to store the selected sport ID
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  useEffect(() => {
    // Fetch articles and sports initially
    fetchArticlesDetails(articleDispatch);
    fetchSports(articleDispatch);
  }, []);

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
        {/* Sport filter links */}
        <button
          key={0}
          className={`navbar-item ${selectedSport === null ? 'active' : ''} font-bold`}
          onClick={() => setSelectedSport(null)}
        >
          All Sports
        </button>
  
        {state.sports &&
          state.sports.map((sport: any) => (
            <button
              key={sport.id}
              className={`navbar-item ${selectedSport === sport.id ? 'active' : ''} font-bold`}
              onClick={() => setSelectedSport(sport.id)}
            >
              {sport.name}
            </button>
          ))}
      </div>
  
      {/* Render articles with formatted date and rounded border */}
      {newsArticleDetails
        .filter((article) =>
          selectedSport === null ? true : article.sport.id === selectedSport
        )
        .map((article: any) => (
          <div key={article.id} className="flex-shrink-0 w-full p-2 flex">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{article.summary}</p>
                <p className="text-gray-500 dark:text-gray-300">
                  {formatDateForPicker(article.date)}
                </p>
                <Link
                  to={`/articles/${article.id}`}
                  className="block mt-4 text-blue-600 hover:underline"
                >
                  Read more...
                </Link>
              </div>
            </div>
            <div className="w-1/4">
              {/* Set a fixed 1:1 aspect ratio for the thumbnail box */}
              <div className="relative h-0" style={{ paddingBottom: "100%" }}>
                <img
                  src={article.thumbnail}
                  alt="Article Thumbnail"
                  className="absolute object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsArticle;
