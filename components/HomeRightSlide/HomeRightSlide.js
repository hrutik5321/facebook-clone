import HomeRightSlideTop from "./HomeRightSlideTop";
import OnlineFriends from "../OnlineFriends";

function HomeRightSlide({ users }) {
  return (
    <div className="sm:hidden">
      <HomeRightSlideTop />
      <hr className="bg-gray-400 mt-2 ml-1" />
      <p className="text-base font-semibold text-gray-600 mt-3 mb-3 ml-2">
        Contacts
      </p>
      {users.map((user, i) => {
        return (
          <OnlineFriends
            image={user.profilePicture}
            username={user.name}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default HomeRightSlide;
