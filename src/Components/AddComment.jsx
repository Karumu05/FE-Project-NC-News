import React, { useContext, useEffect, useState } from "react";
import { postNewCommentToArticle } from "../api";
import UserContext from "../Contexts/User";

const AddComment = ({ article_id, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState(false);
  const [error, setError] = useState(false);

  const user = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    const commentToPost = {
      username: user.username,
      body: newComment,
    };
    postNewCommentToArticle(article_id, commentToPost)
      .then((newCommentData) => {
        setPostedComment(true);
        setError(false);
        setComments([...comments, newCommentData]);
        setNewComment("");
        setTimeout(() => {
          setPostedComment(false);
        }, 2000);
      })
      .catch((error) => {
        setError(true);
      });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="w-1/2 mb-4 mt-4 border border-gray-200 rounded-lg bg-gray-50 bg-gray-700 border-gray-600">
            <div className="px-4 py-2 rounded-t-lg bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900  border-0 bg-gray-800 focus:ring-0 text-white placeholder-white"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center px-3 py-2 border-t border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 focus:ring-blue-900 hover:bg-blue-800"
              >
                {postedComment ? "Comment Added" : "Post Comment"}
              </button>
              {error ? (
                <div className="ml-10">
                  <div
                    id="toast-danger"
                    className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                  >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                      </svg>
                      <span className="sr-only">Error icon</span>
                    </div>
                    <div className="ms-3 text-sm  font-normal">
                      Something went wrong, please try again. Make sure to check you are logged in
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddComment;
