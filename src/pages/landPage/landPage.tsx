import React from "react";
import Appbar from "../../layouts/landPage/Appbar";
import MatchList from "../LiveScore/LiveScore";
import NewsArticle from "../NewsArticle";

const LandPage: React.FC = () => {
    return (<>
        <div className="object-top">
            <Appbar />
            <div>
                    <MatchList />
            </div>
            <div>
                    <NewsArticle />
            </div>
        </div>
    </>);
}

export default LandPage;