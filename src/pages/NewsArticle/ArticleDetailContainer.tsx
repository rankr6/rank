import { Outlet } from "react-router-dom";
import { ArticleProvider } from "../../context/NewsArticles/context";
import ArticleDetails from "./ArticleDetails";


const ArticleDetailsContainer = () => {

    return (
        <>
            <ArticleProvider>
                <ArticleDetails />
                <Outlet/>
            </ArticleProvider>
        </>
    )


};

export default ArticleDetailsContainer;