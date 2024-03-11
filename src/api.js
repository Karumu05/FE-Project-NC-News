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

fetchArticlesById()