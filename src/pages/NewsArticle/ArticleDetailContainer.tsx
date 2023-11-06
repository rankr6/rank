import { Outlet } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";


const ArticleDetailsContainer = () => {

    return (
        <>
                <ArticleDetails />
                <Outlet/>
        </>
    )


};

export default ArticleDetailsContainer;