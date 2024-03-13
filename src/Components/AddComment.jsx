import React, { useEffect, useState } from "react";
import { postNewCommentToArticle } from "../api";

const AddComment = ({ article_id, comments, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const commentToPost = {
      username: "grumpy19", //this will be amended to the user once the functionality has been added
      body: newComment,
    };
    postNewCommentToArticle(article_id, commentToPost).then(
      (newCommentData) => {
        setPostedComment(true)
        setComments([...comments, newCommentData]);
        setNewComment("");
        setTimeout(() => {
          setPostedComment(false)
        }, 2000);
      }
    );
  }

  return (
    <>
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
          </div>
        </div>
      </form>
    </>
  );
};

export default AddComment;
