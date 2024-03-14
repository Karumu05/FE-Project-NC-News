import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {topic} = useParams()

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic).then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, [topic]);

  return isLoading ? (
    <div key="loading-state">
      <p>Loading...</p>
    </div>
  ) : (
    <>
    <div  className="card h-full justify-center items-center flex-col">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
    </>
  );
};

export default ArticleList;
