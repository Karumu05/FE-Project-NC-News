import React, { useContext } from "react";
import UserContext from "../Contexts/User";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <>
    <div className="border-4 rounded-lg m-5 border-black bg-gray-900">
      <div className="grid grid-cols-2 gap-1">
        <div className="flex justify-center items-center m-10">
          <img
            className="rounded-full w-96 h-96"
            src={user.avatar_url}
            alt="user profile picture"
          />
        </div>
        <div className="flex justify-center flex-wrap flex-col items-start">
        <p className="text-white text-7xl m-3">{user.name}</p>
        <p className="text-6xl text-white m-3">{user.username}</p>
        </div>
        <div className="text-white">Add all user votes</div>
        <div className="text-white">Add all user comments</div> 
        {/* create new endpoint to get all comments or comment by user */}
      </div>
      </div>
    </>
  );
};

export default Profile;
