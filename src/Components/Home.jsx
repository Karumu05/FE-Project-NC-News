import React from 'react';
import ArticleList from './ArticleList';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <div className='flex justify-evenly flex-auto'>
                <ArticleList/>
            </div>

        </div>
        
    );
};

export default Home;