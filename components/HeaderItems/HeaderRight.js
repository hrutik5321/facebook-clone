import { ChatAltIcon, BellIcon } from "@heroicons/react/solid";
import DropDown from "./../DropDown";

function HeaderRight() {
  return (
    <div className="h-full flex">
      <div className="h-10 w-10 cursor-pointer relative rounded-full bg-gray-200 hover:bg-gray-300 text-center p-2.5 ml-2">
        <ChatAltIcon className="h-5 text-gray-900" />
        <p className="absolute -top-1 -right-1 block h-5 w-5 text-center text-sm  rounded-full bg-red-500 text-white">
          1
        </p>
      </div>
      <div className="h-10 w-10 cursor-pointer relative rounded-full bg-gray-200 hover:bg-gray-300 text-center p-2.5 ml-2">
        <BellIcon className="h-5 text-gray-900 " />
        <p className="absolute -top-1 -right-1 block h-5 w-5 text-center text-sm  rounded-full bg-red-500 text-white">
          1
        </p>
      </div>

      <DropDown />
    </div>
  );
}

export default HeaderRight;
