import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById, fetchCommentsByArticle } from "../api";
import IndividualComment from "./IndividualComment";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sArticle, setSArticle] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchArticlesById(article_id), fetchCommentsByArticle(article_id)]).then((result) => {
      setSArticle(result[0][0]);
      setComments(result[1])
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <div key="Loading">
      <p>Loading...</p>
    </div>
  ) : (
    <div key={article_id} className="grid grid-template-columns: repeat(2, 1fr) gap-1">
      <div className="flex justify-center w-auto h-auto col-span-2 p-3">
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
      <div className="col-span-2 text-center">
        <p>{sArticle.body}</p>
      </div>
      <div className="col-span-2">
        <h2>Comment count: {sArticle.comment_count}</h2>
        <div className="card  items-center">
          {comments.map((comment) => {
            return <IndividualComment comment={comment} key={comment.comment_id}/>
          })}
        </div>
      </div>
      <div className="col-span-2 card h-auto]">Add comment</div>
    </div>
  );
};

export default ArticlePage;
