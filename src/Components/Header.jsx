import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Contexts/User";

const Header = ({ setCurrentUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  const navigate = useNavigate();
  const user = useContext(UserContext);

  function handleLogOut() {
    setCurrentUser({});
    navigate("/home");
  }

  return (
    <nav className="bg-zinc-400 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="src/Assets/Logo.png" className="h-8" alt="NC News logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NC News
          </span>
          <span className="self-center font-semibold whitespace-nowrap dark:text-white">
            Logged In User: <span className="underline">{user.username}</span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto id=navbar-default ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {user.username ? (
              <li>
                <Link
                  to="/profile"
                  className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white ${
                    currentPage === "Profile"
                      ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500"
                      : ""
                  }`}
                  onClick={(e) => setCurrentPage(e.target.innerText)}
                >
                  Profile
                </Link>
              </li>
            ) : null}

            <li>
              <Link
                to="/home"
                className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white ${
                  currentPage === "Home"
                    ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500"
                    : ""
                }`}
                aria-current="page"
                onClick={(e) => setCurrentPage(e.target.innerText)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white ${
                  currentPage === "Articles"
                    ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500"
                    : ""
                }`}
                onClick={(e) => setCurrentPage(e.target.innerText)}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                to="/log-in"
                className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white ${
                  currentPage === "Log In"
                    ? "md:text-blue-700 bg-blue-700 md:dark:text-blue-500"
                    : ""
                }`}
                onClick={(e) => setCurrentPage(e.target.innerText)}
              >
                Log In
              </Link>
            </li>
            {user.username ? (
              <li>
                <button
                  className={`block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white`}
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
