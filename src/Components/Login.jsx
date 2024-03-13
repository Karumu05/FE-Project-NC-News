import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../api';
import UserCard from './UserCard';

const Login = ({setCurrentUser}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchAllUsers().then((result) => {
            setUsers(result)
        })
    }, [])

    return (
        <div className='flex items-center flex-col flex-wrap m-3'>
            {users.map((user) => {
                return <UserCard key={user.name} user={user} setCurrentUser={setCurrentUser}/>
            })}
        </div>
    );
};

export default Login;