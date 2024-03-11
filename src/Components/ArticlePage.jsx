import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../api";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sArticle, setSArticle] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((result) => {
      setSArticle(result[0]);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <div key="Loading">
      <p>Loading...</p>
    </div>
  ) : (
    <div key={article_id} className="grid grid-cols-2 grid-rows-5 gap-1">
      <div className="flex justify-center w-full col-span-2 p-3">
        <img
          className="h-auto max-w-lg rounded-lg"
          src={sArticle.article_img_url}
          alt={sArticle.title}
        />
      </div>
      <div className="flex items-center flex-shrink text-2xl text-center justify-center ">
        <h1>{sArticle.title}</h1>
      </div>
      <div className="flex items-center flex-shrink text-2xl text-center justify-center ">
        <h1>Article votes: {sArticle.votes}</h1>
      </div>
      <div className="col-span-2 flex text-center">
        <p>{sArticle.body}</p>
      </div>
      <div className="col-span-2">Comments</div>
      <div className="col-span-2">Add comment</div>
    </div>
  );
};

export default ArticlePage;
