/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Logout from "../pages/logout";
import NotFound from "../pages/Notfound";
import { CommentProvider } from "../context/Livescore/context";
import { ArticleProvider } from "../context/NewsArticles/context";
import ArticleDetails from "../pages/NewsArticle/ArticleDetails";
import LandPageLayout from "../layouts/landPage";
import MatchDetails from "../pages/LiveScore/MatchDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPageLayout />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    path: "/landPage",
    element: <LandPageLayout />, 
  },
  {
    path: "matches/:matchID", 
    element: (
      <CommentProvider>
        <MatchDetails />
        <Outlet/>
      </CommentProvider>
    )
  },
  {
    path: "articles/:articleID",
    element: (
      <ArticleProvider>
        <ArticleDetails />
        <Outlet/>
      </ArticleProvider>
    )
  }
]);

export default router;


