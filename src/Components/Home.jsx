import React from 'react';
import ArticleList from './ArticleList';

const Home = () => {
    return (
        <div>
            <div className='flex justify-evenly flex-auto'>
                <ArticleList key="article-list"/>
            </div>

        </div>
        
    );
};

export default Home;