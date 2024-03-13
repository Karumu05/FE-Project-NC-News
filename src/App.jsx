import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleList from "./Components/ArticleList";
import Home from "./Components/Home";
import UserList from "./Components/UserList";
import ArticlePage from "./Components/ArticlePage";
import UserContext from "./Contexts/User";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({ username: "grumpy19" });
  //create a log in page allowing the user to select differnt users
  //fetch users and then set the current user to currentuser state pass set user to the log in page

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/profile" element={<UserList />} />
          <Route path="/article-page/:article_id" element={<ArticlePage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
