import Head from "next/head";
import posts from "./../../dummyData";
import ProfileImage from "../../components/Profile/ProfileImage";
import Posts from "../../components/Posts";
import { UserIcon, ChatIcon } from "@heroicons/react/solid";
import PofileInfo from "../../components/Profile/PofileInfo";
import Header from "../../components/Header";

function UserProfile({ profileUser }) {
  return (
    <>
      <Head>
        <title>{`${profileUser.name} | Cheat Chat`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex bg-white flex-col mt-14 justify-center items-center w-full">
        <ProfileImage userInfo={profileUser} />
        <hr className="w-3/4 mt-1 bg-gray-300" />
      </div>
      <div className="w-full bg-white shadow-sm flex justify-center">
        <div className="w-3/4 mt-1 flex items-center justify-between">
          <div className="flex">
            <p className="cursor-pointer border-b-2 border-blue-500 text-base font-medium text-blue-500 p-4 hover:bg-gray-200 ">
              Posts
            </p>
            <p className="cursor-pointer text-base font-medium p-4 hover:bg-gray-200 rounded-md">
              About
            </p>
          </div>
          <div className="flex">
            <button className="py-2 px-3 text-white font-semibold items-center rounded-md  bg-blue-500 flex text-base">
              <UserIcon height={16} className="mr-1" /> Friend
            </button>
            <button className="py-2 px-3 text-white font-semibold items-center rounded-md  bg-blue-500 flex text-base ml-3">
              <ChatIcon height={16} className="mr-1" /> Friend
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/4">
          <PofileInfo>
            <Posts post={profileUser} />
          </PofileInfo>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

export const getServerSideProps = async (context) => {
  const res = posts.filter((post) => post.name === context.params.username);
  const profileUser = res[0];
  return {
    props: {
      profileUser,
    },
  };
};
