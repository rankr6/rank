import React from "react";
import Appbar from "../../layouts/landPage/Appbar";
import MatchList from "../LiveScore/LiveScore";
import NewsArticle from "../NewsArticle";
import { CommentProvider } from "../../context/Livescore/context";
import { ArticleProvider } from "../../context/NewsArticles/context";
// import NewsArticle from "../NewsArticle";

const LandPage: React.FC = () => {
    return (<>
        <div className="object-top">
            <Appbar />
            <div>
                <CommentProvider>
                    <MatchList />
                </CommentProvider>
            </div>
            <div>
                <ArticleProvider>
                    <NewsArticle />
                </ArticleProvider>
            </div>
        </div>
    </>);
}

export default LandPage;