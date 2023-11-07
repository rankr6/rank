import React from 'react';
import NewsArticle from './NewsArticles';
import FavoriteSportAndTeam from '../FavoriteItem/FavoriteItem';
import { PreferenceProvider } from '../../context/Preference/context';

const NewsArticlePage: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-screen-xl mx-auto p-4 grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <NewsArticle />
                </div>

                <div className="col-span-1">
                    <PreferenceProvider>
                        <FavoriteSportAndTeam />
                    </PreferenceProvider>
                </div>
            </div>
        </div>
    );
}

export default NewsArticlePage;
