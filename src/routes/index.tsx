/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, createBrowserRouter } from "react-router-dom";

// import AccountLayout from "../layouts/account"
// import ProtectedRoute from "./ProtectedRoute"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Logout from "../pages/logout";
import NotFound from "../pages/Notfound";
import LandPage from "../pages/landPage/landPage";
import MatchDetasils from "../pages/LiveScore/MatchDetails";
import { CommentProvider } from "../context/Livescore/context";
import { ArticleProvider } from "../context/NewsArticles/context";
import ArticleDetails from "../pages/NewsArticle/ArticleDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage />
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
  // Protected Routes
  {
    path: "/landPage",
    element: (
      <LandPage />
    )
  },
  {
    path: "/matches/:matchID",
    element: (
      <CommentProvider>
        <MatchDetasils />
        <Outlet/>
      </CommentProvider>
    )
  },
  {
    path: "/articles/:articleID",
    element: (
      <ArticleProvider>
        <ArticleDetails />
        <Outlet/>
      </ArticleProvider>
    )
  }
  //   children: [
  //     {
  //       path: "projects",
  //       element: <ProjectContainer />,
  //       children: [
  //         { index: true, element: <Projects /> },
  //         {
  //           path: ":projectID",
  //           element: <ProjectDetails />,
  //           children: [
  //             { index: true,element:<></>},
  //             {
  //               path: "tasks",
  //               children: [
  //                 { index: true, element: <Navigate to="../" /> },
  //                 {
  //                   path: "new",
  //                   element: <NewTask />,
  //                 },
  //                 {
  //                   path: ":taskID",
  //                   children: [
  //                     { index: true, element: <TaskDetailsContainer /> },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  // {
  //   path: "members",
  //   element: (<Members />)
  // },
  // { index: true, element: <Navigate to="/account/projects" replace /> },
  // {
  //   path: "projects",
  //   element: (<Projects />)
  // },
],)

export default router;