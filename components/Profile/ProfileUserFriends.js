import Image from "next/image";
import posts from "./../../dummyData";

function ProfileUserFriends() {
  return (
    <div className="p-2 rounded-md border border-gray-300 flex flex-col  mt-4 bg-white shadow-sm">
      <p className="font-bold text-xl text-gray-900 mb-2 content-start ml-1">
        Friends
      </p>
      <div className="rounded-sm flex justify-center flex-wrap max-h-96 overflow-y-hidden">
        {posts.map((friend) => {
          return (
            <div className="w-24 ml-3 mt-2">
              <div className="w-full relative h-24 rounded-md">
                <Image
                  src={friend.profilePicture}
                  layout="fill"
                  className="rounded-md p-1"
                />
              </div>
              <p className="text-sm font-semibold text-gray-800 ">
                {friend.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileUserFriends;
