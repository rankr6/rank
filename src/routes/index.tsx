import { Navigate,  createBrowserRouter } from "react-router-dom";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import NotFound from "../pages/Notfound";
import LandPageLayout from "../layouts/landPage";
import MatchDetailsContainer from "../pages/LiveScore/MatchDetailContainer";
import ArticleDetailsContainer from "../pages/NewsArticle/ArticleDetailContainer";
import UserPreference from "../pages/UserPreference/PreferencesContainer";


const router = createBrowserRouter([
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
    path: "/",
    element: <LandPageLayout />,
    children: [
      {
        path: "matches/:matchID",
        element: <MatchDetailsContainer />
      },
      {
        path: "articles/:articleID",
        element: <ArticleDetailsContainer/>
      },
      {
        path: "userPreference",
        element: <UserPreference />
      },
    ]
  },
  {
    path: "/landPage",
    element: <Navigate to="/" replace />
  }
]);

export default router;
