import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="p-2" key={article.article_id}>
      <Link to={`/article-page/${article.article_id}`} className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="">
        <img
          className="object-cover w-full rounded-t-lg h-96 h-auto w-48 md:rounded-none rounded-s-lg"
          src={article.article_img_url}
          alt={article.title}
        />
        </div>
        <div className="w-2/3">
        <div className="flex flex-col justify-between p-4 leading-normal" key={article.title}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {article.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Author: {article.author}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Votes: {article.votes}
          </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
