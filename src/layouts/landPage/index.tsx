import { Outlet } from "react-router-dom"
import Appbar from "./Appbar"
import { CommentProvider } from "../../context/Livescore/context"
import MatchList from "../../pages/LiveScore/LiveScore"
import { ArticleProvider } from "../../context/NewsArticles/context"
import NewsArticle from "../../pages/NewsArticle"

const LandPageLayout = () => {

  return (
    <>
      <Appbar />
      <main>
        <div >
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
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LandPageLayout
