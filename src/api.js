import axios from "axios";
import { createClient } from 'pexels';

const client = createClient('f8BYbiAbrqkLEkgKm0FWEwpGwpIpKRSLGHtFlmdV8rCCwpkapB3y3nAy');

export const fetchPhotos = (query) => {
  return client.photos.search({query, per_page: 1}).then((result) => {
    return result.photos[0]
  })
}

const newsAPI = axios.create({
  baseURL: "https://project-nc-news-9s8b.onrender.com/api",
});

export const fetchArticles = (topic, sort_by, order) => {
  return newsAPI.get("/articles",{params: {topic: topic, sort_by: sort_by, order: order}}).then((result) => {
    return result.data.articles;
  });
};

export const fetchArticlesById = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((result) => {
    return result.data.article;
  });
};

export const fetchCommentsByArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((result) => {
    return result.data.comments;
  });
};

export const updateArticleVote = (article_id, votes) => {
  return newsAPI.patch(`/articles/${article_id}`, {
    inc_votes: votes,
  });
};

export const postNewCommentToArticle = (article_id, commentToPost) => {
  return newsAPI
    .post(`/articles/${article_id}/comments`, commentToPost)
    .then((result) => {
      return result.data.addedComment[0];
    });
};

export const deleteCommentFromArticle = (comment_id) => {
  return newsAPI.delete(`/comments/${comment_id}`).then(() => {
    return { msg: `Comment Deleted` };
  });
};

export const fetchAllUsers = () => {
  return newsAPI.get('/users').then((result) => {
    return result.data.users
  })
}

export const fetchAllTopics = () => {
  return newsAPI.get('/topics').then((result) => {
    return result.data.topics
  })
}



