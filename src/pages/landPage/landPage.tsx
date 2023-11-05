import React from "react";
import Appbar from "../../layouts/landPage/Appbar";
import MatchList from "../LiveScore/LiveScore";
import NewsArticle from "../NewsArticle";
import { CommentProvider } from "../../context/Livescore/context";
import { ArticleProvider } from "../../context/NewsArticles/context";
import { Outlet } from "react-router-dom";

const LandPage: React.FC = () => {
    return (<>
        <div className="object-top">
            <Appbar />
            <div>
                <CommentProvider>
                    <MatchList />
                    <Outlet />
                </CommentProvider>
            </div>
            <div>
                <ArticleProvider>
                    <NewsArticle />
                    <Outlet />
                </ArticleProvider>
            </div>
        </div>
    </>);
}

export default LandPage;