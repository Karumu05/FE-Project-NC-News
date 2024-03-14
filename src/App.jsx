import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Home from "./Components/Home";
import ArticlePage from "./Components/ArticlePage";
import UserContext from "./Contexts/User";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const data = window.localStorage.getItem("persistantUser");
    if (data !== null) setCurrentUser(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("persistantUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Header setCurrentUser={setCurrentUser} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:topic" element={<ArticleList/>} />
          <Route path="/log-in" element={<Login setCurrentUser={setCurrentUser} />}/>
          <Route path="/article-page/:article_id" element={<ArticlePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
