import { VideoCameraIcon, PhotographIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Share() {
  return (
    <form className="mt-4 h-28 w-full bg-white p-3 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="w-10 h-10 relative">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="profile Photo"
            className="rounded-full"
            layout="fill"
          />
        </div>
        <input
          type="text"
          placeholder="Whats in Your mind, Hrutik?"
          className="w-4/5 rounded-2xl ml-3 px-4 py-1.5 bg-gray-100 outline-none"
        />
      </div>

      <hr className="mt-3" />
      <div className="flex mt-1 justify-around">
        <label
          htmlFor="filePhoto"
          className="flex items-center py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <PhotographIcon height={28} className="text-red-600" />
          <p className="ml-2 text-sm font-medium">Photo/Video</p>
        </label>
        <input style={{ display: "none" }} type="file" id="filePhoto" />
        <div className="flex ml-1 items-center py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
          <VideoCameraIcon height={28} className="text-red-600" />
          <p className="ml-2 text-sm font-medium">Live Video</p>
        </div>
        <button
          type="submit"
          className="justify-self-end  px-3 bg-green-600 text-white rounded-md text-sm font-medium"
        >
          Share
        </button>
      </div>
    </form>
  );
}

export default Share;
