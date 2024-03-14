import React from "react";
import ArticleList from "./ArticleList";
import TopicsList from "./TopicsList";

const Home = () => {
  return (
    <div className="grid grid-cols-2">
        <div className="flex flex-col justify-start flex-auto">
          <TopicsList />
        </div>
      <div className="flex justify-evenly flex-auto">
        <ArticleList key="article-list" />
      </div>
    </div>
  );
};

export default Home;
