import {
  HomeIcon,
  ShoppingBagIcon,
  LocationMarkerIcon,
  HeartIcon,
  WifiIcon,
} from "@heroicons/react/solid";
import ProfileUserPhotos from "./ProfileUserPhotos";
import ProfileUserFriends from "./ProfileUserFriends";

function PofileInfo({ children }) {
  return (
    <div className="w-full flex mt-3">
      <div className="w-2/5  ">
        <div className="p-2 shadow-sm border border-gray-300 w-full bg-white rounded-md">
          <p className="font-bold text-xl text-gray-900 mb-2">Intro</p>
          <p className="text-base text-gray-900 flex items-center">
            <ShoppingBagIcon className="mr-2 h-5 text-gray-500" /> Studying in
            <span className="font-medium ml-1">Terna college</span>
          </p>
          <p className=" text-base text-gray-900 mt-1.5 flex  items-center">
            <HomeIcon className="mr-2 h-5 text-gray-500" /> Lives in
            <span className="font-medium ml-1"> Kalyan</span>
          </p>
          <p className=" text-base text-gray-900 mt-1.5 flex items-center">
            <LocationMarkerIcon className="mr-2 h-5 text-gray-500" />
            From <span className="font-medium ml-1">Mumbai</span>
          </p>

          <p className=" text-base text-gray-900 mt-1.5 flex items-center">
            <HeartIcon className="mr-2 h-5 text-gray-500" />{" "}
            <span className="font-medium ml-1">Single</span>
          </p>
          <p className=" text-base text-gray-900 mt-1.5 flex items-center">
            <WifiIcon className="mr-2 h-5 text-gray-500 rotate-45" /> Followed
            By
            <span className="font-medium ml-1">1600 People</span>
          </p>
        </div>

        {/* User Post Photos */}
        <ProfileUserPhotos />

        {/* User Friends */}
        <ProfileUserFriends />
      </div>
      <div className="flex-1 h-36 -mt-3 ml-3 ">{children}</div>
    </div>
  );
}

export default PofileInfo;
