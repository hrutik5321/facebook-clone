import Image from "next/image";

function ProfileImage({ userInfo }) {
  return (
    <>
      <div className="w-3/4 relative h-80 rounded-b-lg">
        <Image
          layout="fill"
          src={userInfo.img}
          className="rounded-b-lg"
          alt="user Image"
        />
      </div>
      <div className="w-40 relative h-40 border-2 border-white rounded-full -mt-36">
        <Image
          layout="fill"
          src={userInfo.profilePicture}
          className="rounded-full"
          alt="profile image"
        />
      </div>
      <p className="text-3xl font-bold mt-3">{userInfo.name}</p>
      <p className="text-lg text-gray-500">{userInfo.des}</p>
    </>
  );
}

export default ProfileImage;
