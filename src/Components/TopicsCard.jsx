import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../api';

const TopicsCard = ({ topic }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [photo, setPhoto] = useState('')

    useEffect(()=>{
      fetchPhotos(topic.slug).then((photo) => {
        setPhoto(photo.src.original)
        setIsLoading(false)
      })
    }, [])
    
    return isLoading ? <div><p>Loading...</p></div> : (
        <div className='p-2'>
        <Link
          to={`/articles/${topic.slug}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 " src={photo} alt={photo?.alt}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic.slug}</h5>
            </div>
        </Link>
        </div>
    );
};

export default TopicsCard;