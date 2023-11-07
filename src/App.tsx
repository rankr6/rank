import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import { CommentProvider } from "./context/Livescore/context";
import { ArticleProvider } from "./context/NewsArticles/context";
import { PreferenceProvider } from "./context/Preference/context";
import { SportProvider } from "./context/Sport/context";
import { TeamProvider } from "./context/Team/context";

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      <PreferenceProvider>
        <ArticleProvider>
          <CommentProvider>
            <SportProvider>
              <TeamProvider>
                <RouterProvider router={router} />
              </TeamProvider>
            </SportProvider>
          </CommentProvider>
        </ArticleProvider>
      </PreferenceProvider>
    </div>
  );
}
export default App;