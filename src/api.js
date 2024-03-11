import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://project-nc-news-9s8b.onrender.com/api"
})

export const fetchArticles = () => {
    return newsAPI.get("/articles").then((result) => {
        return result.data.articles
    })
}
