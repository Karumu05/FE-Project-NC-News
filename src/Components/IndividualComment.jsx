import React, { useContext, useState } from "react";
import UserContext from "../Contexts/User";
import { deleteCommentFromArticle } from "../api";

const IndividualComment = ({ comment, setDeletedComment, setComments, comments }) => {
  const timeReg = /(\d{2}:\d{2})/g;
  const displayTime = comment.created_at.match(timeReg);
  const user = useContext(UserContext);
  const [error, setError] = useState(false);

  function handleDelete() {
    deleteCommentFromArticle(comment.comment_id)
      .then(() => {
        setDeletedComment(true);
        setError(false);
        setComments([...comments]);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
    setDeletedComment(false);
  }

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-white">
            {comment.author}
          </span>
          <span className="text-sm font-normal text-gray-400">
            {displayTime}
          </span>

          {user.username === comment.author ? (
            <span>
              <button onClick={handleDelete}>
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-red-800 text-red-200">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                  </svg>
                  <span className="sr-only">Delete button</span>
                </div>
              </button>
            </span>
          ) : null}
        </div>
        {error ? alert("Comment not deleted, please try again") : null}
        <p className="text-sm font-normal py-2.5 text-white">
          {comment.body}
        </p>

        <span className="text-sm font-normal text-gray-400">
          Votes: {comment.votes}
        </span>
      </div>
    </div>
  );
};

export default IndividualComment;
