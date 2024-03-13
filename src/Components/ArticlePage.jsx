import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchArticlesById,
  fetchCommentsByArticle,
  updateArticleVote,
} from "../api";
import IndividualComment from "./IndividualComment";
import AddComment from "./AddComment";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sArticle, setSArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchArticlesById(article_id),
      fetchCommentsByArticle(article_id),
    ]).then((result) => {
      const initialVotes = result[0][0]?.votes;
      setVotes(initialVotes);
      setSArticle(result[0][0]);
      setComments(result[1]);
      setIsLoading(false);
    });
  }, []);

  function handleClick() {
    if (!isClicked) {
      setIsClicked(true);
    }
    setVotes((currentVotes) => {
      updateArticleVote(article_id, currentVotes + 1)
        .then(() => {
          setVotes(currentVotes + 1);
          setError(null);
        })
        .catch((err) => {
          setVotes(currentVotes - 1);
          setError("Something went wrong please try again.");
        });

      return currentVotes + 1;
    });
  }

  return isLoading ? (
    <div key="Loading">
      <p>Loading...</p>
    </div>
  ) : (
    <div
      key={sArticle.title}
      className="grid grid-template-columns: repeat(2, 1fr) gap-1"
    >
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
        <h1>Article votes: {votes}</h1>
        <span className="ml-10 border rounded border-lime-500 border-double ring-2 ring-lime-500">
          {error ? <p>{error}</p> : null}
          <button onClick={handleClick} disabled={isClicked}>
            👍
          </button>
        </span>
      </div>
      <div className="col-span-2 text-center">
        <p>{sArticle.body}</p>
      </div>
      <div className="col-span-2">
        <h2>Comment count: {sArticle.comment_count}</h2>
        <div className="flex flex-wrap p-3 h-full justify-evenly">
          {comments.map((comment) => {
            return (
              <IndividualComment comment={comment} key={comment.comment_id} />
            );
          })}
        </div>
      </div>
      <div className="col-span-2 card h-auto relative h-100vh ">
        <AddComment
          key="Add-comments"
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
