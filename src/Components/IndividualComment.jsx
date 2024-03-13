import React from "react";

const IndividualComment = ({ comment }) => {

  const timeReg = /(\d{2}:\d{2})/g;
  const displayTime = comment.created_at.match(timeReg);

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {comment.author}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {displayTime}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {comment.body}
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Votes: {comment.votes}
        </span>
      </div>
      <button></button>
    </div>
  );
};

export default IndividualComment;
