import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Comment(props) {
  return (
    <div className="px-4 py-2">
      {/* comment input */}
      <div className="flex items-center">
        <div className="relative w-8 h-8 rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="profile Photo"
            className="w-8 h-8 rounded-full"
            layout="fill"
          />
        </div>

        <input
          type="text"
          placeholder="Write a comment...."
          className=" flex-1 rounded-2xl ml-2 mr-3 px-4 py-1.5 bg-gray-100 outline-none"
        />
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <ArrowCircleRightIcon width={16} height={16} />
        </button>
      </div>
      {/* comment input end */}

      <div className="mt-4 flex">
        <div className="w-8 h-8 rounded-full flex-none relative">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="profile Photo"
            className="w-8 h-8 rounded-full flex-none"
            layout="fill"
          />
        </div>
        <div className="py-1 rounded-md ml-2 px-2 bg-gray-200">
          <p className="text-xs  font-semibold">Hrutik Dhumal</p>
          <p className="text-sm flex-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            sapiente incidunt natus recusandae fugiat ratione numquam aperiam
            iste, in expedita deleniti
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
