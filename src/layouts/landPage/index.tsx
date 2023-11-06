import { CommentProvider } from "../../context/Livescore/context"
import { ArticleProvider } from "../../context/NewsArticles/context"
import MatchList from "../../pages/LiveScore/LiveScore"
import NewsArticle from "../../pages/NewsArticle"
import Appbar from "./Appbar"
import { Outlet } from "react-router-dom"

const LandPageLayout = () => {

  return (
    <>
      <Appbar />
      <main>
        <Outlet/>
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
      </main>
    </>
  )
}

export default LandPageLayout
