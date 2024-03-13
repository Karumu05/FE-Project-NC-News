import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://project-nc-news-9s8b.onrender.com/api"
})

export const fetchArticles = () => {
    return newsAPI.get("/articles").then((result) => {
        return result.data.articles
    })
}

export const fetchArticlesById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`).then((result) => {
        return result.data.article
    })
}

export const fetchCommentsByArticle = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`).then((result) => {
        return result.data.comments
    })
}

export const updateArticleVote = (article_id, votes) => {
    return newsAPI.patch(`/articles/${article_id}`, {
        inc_votes: votes
    })
}

export const postNewCommentToArticle = (article_id, commentToPost) => {
    return newsAPI.post(`/articles/${article_id}/comments`, commentToPost ).then((result) => {
        return result.data.addedComment[0]
    })
}


