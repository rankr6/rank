import React from "react";
import Appbar from "../../layouts/landPage/Appbar";
import MatchList from "../LiveScore/LiveScore";
import NewsArticle from "../NewsArticle";
// import NewsArticle from "../NewsArticle";

const LandPage: React.FC = () => {
    return (<>
        <div className="object-top">
            <Appbar />
        </div>
        <h1>Landing Page</h1>
        <div>
            <MatchList />
        </div>
        <div>
            <NewsArticle />
        </div>
    </>);
}

export default LandPage;