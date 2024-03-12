import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleCard from './ArticleCard';

const ArticleList = () => {

    const [articles, setArticles] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchArticles().then((result) => {
            setArticles(result)
            setIsLoading(false)
        })
    }, [])


    return isLoading ? <div key="loading"><p>Loading...</p></div> : (
         <div key={"mapped"} className='card h-full justify-center items-center flex-col'>
            {articles.map((article) => {
                return <ArticleCard key={article.id} article={article}/>
            })}
        </div>
    );
    
};

export default ArticleList;