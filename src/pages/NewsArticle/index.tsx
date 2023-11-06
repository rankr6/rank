import React from 'react';
import NewsArticle from './NewsArticles';
import FavouriteListArticles from '../FavoriteItem/FavoriteItem';

const NewsArticlePage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-screen-xl mx-auto p-4 grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <NewsArticle />
                </div>

                <div className="col-span-1">
                        <FavouriteListArticles />
                </div>
            </div>
        </div>
    );
}

export default NewsArticlePage;
