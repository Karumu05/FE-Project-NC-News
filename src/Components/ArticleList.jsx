import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import SortByDropdown from "./SortByDropdown";

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  const [searchQuery, setSearchQuery] = useState({});
  const [displayError, setDisplayError] = useState({})
  const [isError, setIsError] = useState(false)

  

  const sortByItems = [
    { value: "created_at", label: "Date" },
    { value: "comment_count", label: "Comment count" },
    { value: "votes", label: "votes" },
  ];

  const ascDesc = [
    { value: "asc", label: "Acending" },
    { value: "desc", label: "Decending" },
  ];

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, searchQuery.sort_by, searchQuery.order).then(
      (result) => {
        if (result === undefined){
          setIsError(true)
          setDisplayError({status: 404, data: { msg: "Not found"}})
        }
        setArticles(result);
        setIsLoading(false);
      }
    ).catch((err) => {
      setIsError(true)
      setDisplayError(err.response)

    })
  }, [topic, searchQuery]);

  return isError ? (
    <div>
      {alert(`Something went wrong
              ${displayError.status}
              ${displayError.data.msg}`)}
      {window.location = "/home"}
    </div>
  ) :

   isLoading ? (
    <div key="loading-state">
      <p>Loading...</p>
    </div>
  ) : (
    <>
      <div className="flex flex-row justify-evenly items-center rounded-lg shadow border-gray-700 bg-gray-800  m-2 p-2">
        <SortByDropdown
          label="Sort Articles By ..."
          sortByItems={sortByItems}
          setSearchQuery={setSearchQuery}
        />
        <Dropdown
          label="Sort Order By ..."
          ascDesc={ascDesc}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="card h-full justify-center items-center flex-col">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
