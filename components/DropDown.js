import React, { useState } from "react";
// @ts-ignore
import Image from "next/image";
// @ts-ignore
import Link from "next/link";

function DropDown() {
  const [dropShow, setDropShow] = useState(false);

  const onChangeHandler = () => {
    setDropShow(!dropShow);
  };

  return (
    <div className="relative cursor-pointer rounded-md inline-block text-left ml-2 hover:bg-gray-200">
      <div onClick={onChangeHandler} className="flex">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="profile image"
          className="w-10 h-10 rounded-full ml-2 -mr-2 z-10 cursor-pointer"
        />
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md hover:bg-gray-200  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Hrutik
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          !dropShow
            ? "hidden z-10"
            : "origin-top-right z-10 shadow-2xl absolute right-0 mt-4 w-56 rounded-md bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        // @ts-ignore
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <Link href="/">
            <p
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              // @ts-ignore
              tabIndex="-1"
              id="menu-item-0"
            >
              Edit
            </p>
          </Link>
          <Link href="/">
            <p
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              // @ts-ignore
              tabIndex="-1"
              id="menu-item-1"
            >
              Friends
            </p>
          </Link>
        </div>
        <div className="py-1" role="none">
          <Link href="/login">
            <p
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              // @ts-ignore
              tabIndex="-1"
              id="menu-item-6"
            >
              Logout
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
