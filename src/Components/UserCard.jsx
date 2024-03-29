import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Contexts/User";

const UserCard = ({ user, setCurrentUser}) => {

    const currentUser = useContext(UserContext)
    const navigate = useNavigate()



    function handleClick() {
        setCurrentUser({
            username: user.username,
            name: user.name,
            avatar_url: user.avatar_url
        })
        navigate('/home')
    }

  return (
    <div className="p-4 w-1/3">
      <div className="  border  rounded-lg shadow bg-gray-800 border-gray-700">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.avatar_url}
            alt="user avatar"
          />
          <h5 className="mb-1 text-xl font-medium text-white">
            {user.name}
          </h5>
          <span className="text-sm text-gray-400">
            {user.username}
          </span>
          <div className="flex mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={handleClick}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
