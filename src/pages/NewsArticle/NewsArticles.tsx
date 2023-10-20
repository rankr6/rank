/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { fetchArticlesDetails } from "../../context/NewsArticles/action";
import { useNewsArticleDetailDispatch, useNewsArticleState } from "../../context/NewsArticles/context";
import { NewsArticleDetailState } from "../../context/NewsArticles/type";
import { Link } from "react-router-dom";

const NewsArticle = () => {
    const state: NewsArticleDetailState = useNewsArticleState();
    const { newsArticleDetails, isLoading, isError, errorMessage } = state;
    const articleDispatch = useNewsArticleDetailDispatch();

    useEffect(() => {
        // Fetch data when the component mounts
        fetchArticlesDetails(articleDispatch);
    }, []); // Provide an empty dependency array to run this effect only once
    
    
    if (isLoading) {
        return <div className="text-left p-4">Loading...</div>;
    }
    
    if (isError) {
        return <div className="text-left p-4">{errorMessage}</div>;
    }
    
    return (
        <div className="text-left content-start p-4">
            <h1 className="text-3xl font-bold text-black mb-4">News Articles</h1>

            {newsArticleDetails.map((article: any) => (
                <div key={article.id} className="comment flex-shrink-0 p-2 w-fit h-fit scrollbar text-black rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="mb-2 font-bold">{article.title}</div>
                    <div className="mb-2">{article.summary}</div>
                    <img src={article.thumbnail} className="mb-2" alt="Article Thumbnail" />
                    <div>{article.date}</div>
                    <div>
                        <Link to={`/articles/${article.id}`}>Read more...</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsArticle;
