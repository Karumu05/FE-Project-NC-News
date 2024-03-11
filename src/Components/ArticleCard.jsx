import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="p-2" key={article.article_id}>
      <Link to={`/article-page/${article.article_id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          key={article.article_img_url}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={article.article_img_url}
          alt={article.title}
        />
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
      </Link>
    </div>
  );
};

export default ArticleCard;
