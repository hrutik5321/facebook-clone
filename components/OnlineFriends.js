import Image from "next/image";

function OnlineFriends({ image, username }) {
  return (
    <>
      <div className=" w-full p-2 flex cursor-pointer items-center hover:bg-gray-200">
        <div className="h-8 w-8 relative">
          <Image layout="fill" className="rounded-full" src={image} />
          <div className="absolute rounded-full w-2.5 h-2.5 bg-green-400 bottom-0 -right-1"></div>
        </div>
        <p className="text-sm font-medium ml-2">{username}</p>
      </div>
    </>
  );
}

export default OnlineFriends;
