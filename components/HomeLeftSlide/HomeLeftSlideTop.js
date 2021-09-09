import {
  UsersIcon,
  PresentationChartBarIcon,
  VideoCameraIcon,
  BookmarkIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";

function HomeLeftSlideTop() {
  return (
    <>
      <ul>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center ml-1 h-11">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="profile photo"
            className="w-9 h-9 rounded-full"
          />{" "}
          <p className="ml-1 text-base font-medium">Hrutik Dhumal</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <UsersIcon className="h-6 w-6 ml-2 text-blue-400" />
          <p className="ml-2.5 text-base font-medium">Friends</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <PresentationChartBarIcon className="h-6 w-6 ml-2 text-blue-400" />
          <p className="ml-2.5 text-base font-medium">Marketplace</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <VideoCameraIcon className="h-6 w-6 ml-2 text-blue-400" />
          <p className="ml-2.5 text-base font-medium">Watch</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <ClockIcon className="h-6 w-6 ml-2 text-blue-400" />
          <p className="ml-2.5 text-base font-medium">Memories</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <BookmarkIcon className="h-6 w-6 ml-2 text-blue-400" />
          <p className="ml-2.5 text-base font-medium">Saved</p>
        </li>
        <li className="flex cursor-pointer hover:bg-gray-200 items-center content-start ml-1 h-11 ">
          <CalendarIcon className="h-6 w-6 ml-2 text-blue-400 " />
          <p className="ml-3 text-base font-medium">Saved</p>
        </li>
      </ul>
      <hr className="mt-1 bg-gray-300" />
    </>
  );
}

export default HomeLeftSlideTop;
