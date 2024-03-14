import React, { useEffect, useState } from 'react';
import { fetchAllTopics } from '../api';
import TopicsCard from './TopicsCard';

const TopicsList = () => {

    const [topics, setTopics] = useState([])

    useEffect(()=>{
        fetchAllTopics().then((topicList) => {
            setTopics(topicList)
        })
    },[])


    return (
        <>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow border-gray-700 dark:bg-gray-800  m-2">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Choose a topic below
            </h5>
          </div>
        </div>
        <div className='card h-full justify-center items-center flex-col'>
            {topics.map((topic) => {
                return <TopicsCard key={topic.slug} topic={topic}/>
            })}
        </div>
        </>
    );
};

export default TopicsList;