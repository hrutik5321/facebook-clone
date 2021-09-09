import { SearchIcon } from "@heroicons/react/outline";

function HeaderSearchBox() {
  return (
    <div className="rounded-full p-2 ml-1 flex bg-gray-200 items-center">
      <SearchIcon height={19} className="text-gray-800" />
      <input
        type="text"
        placeholder="Search Friends"
        className="block bg-transparent text-gray-800 ml-1 outline-none"
      />
    </div>
  );
}

export default HeaderSearchBox;
