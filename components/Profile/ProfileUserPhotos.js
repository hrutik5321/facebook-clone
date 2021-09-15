import Image from "next/image";
import posts from "./../../dummyData";

function ProfileUserPhotos() {
  return (
    <div className="p-2 rounded-md border border-gray-300  mt-4 bg-white shadow-sm">
      <p className="font-bold text-xl text-gray-900 mb-2 ">Photos</p>
      {/* grid grid-cols-3 grid-rows-3 gap-1 */}
      <div className="rounded-sm flex flex-wrap max-h-80 overflow-y-hidden">
        {posts.map((photo, i) => {
          return (
            <div className="relative h-28 w-28 m-1" key={i}>
              <Image layout="fill" src={photo.img} alt="User Image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileUserPhotos;
