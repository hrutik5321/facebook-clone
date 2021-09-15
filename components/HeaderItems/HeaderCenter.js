import {
  HomeIcon,
  VideoCameraIcon,
  ArchiveIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

function HeaderCenter() {
  const router = useRouter();
  return (
    <div className="flex sm:hidden">
      <Link href="/" passHref>
        <div
          className={
            router.pathname === "/"
              ? "border-b-2 border-blue-400 h-14 px-9 flex items-center cursor-pointer"
              : "h-14 px-9 flex items-center cursor-pointer"
          }
        >
          <HomeIcon
            height={28}
            className={
              router.pathname === "/"
                ? "text-blue-500 hover:text-blue-500"
                : "hover:text-blue-500 text-gray-700"
            }
          />
        </div>
      </Link>
      <Link href="/about" passHref>
        <div
          className={
            router.pathname === "/about"
              ? "border-b-2 border-blue-400 h-14 px-9 flex items-center cursor-pointer"
              : "h-14 px-9 flex items-center cursor-pointer hover:border-b-2 hover:border-blue-400"
          }
        >
          <VideoCameraIcon
            height={28}
            className={
              router.pathname === "/about"
                ? "text-blue-500 hover:text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }
          />
        </div>
      </Link>
      <div className="hover:border-b-2 hover:border-blue-400 h-14 px-9 flex items-center">
        <ArchiveIcon
          height={28}
          className="hover:text-blue-500 text-gray-700"
        />
      </div>
      <div className="hover:border-b-2 hover:border-blue-400 h-14 px-9 flex items-center">
        <UserGroupIcon
          height={28}
          className="hover:text-blue-500 text-gray-700"
        />
      </div>
    </div>
  );
}

export default HeaderCenter;
