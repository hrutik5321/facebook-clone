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
        <div>
          <div className="w-10 h-10 rounded-full ml-2 -mr-2 z-10 cursor-pointer relative"></div>
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="profile image"
            layout="fill"
            className="rounded-full"
          />
        </div>
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
