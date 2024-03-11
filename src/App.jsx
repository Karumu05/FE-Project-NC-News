import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import ArticleList from "./Components/ArticleList"
import Home from "./Components/Home"
import UserList from "./Components/UserList"
import ArticlePage from "./Components/ArticlePage"

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/home" element={ <Home/> }/>
          <Route path="/articles" element={ <ArticleList/> }/>
          <Route path="/profile" element={ <UserList/> }/>
          <Route path="/article-page/:article_id" element={ <ArticlePage/> }/>
        </Routes>
    </>
  )
}

export default App
