import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import ArticleList from "./Components/ArticleList"
import Home from "./Components/Home"
import UserList from "./Components/UserList"

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/home" element={ <Home/> }/>
          <Route path="/articles" element={ <ArticleList/> }/>
          <Route path="/profile" element={ <UserList/> }/>
        </Routes>
    </>
  )
}

export default App
