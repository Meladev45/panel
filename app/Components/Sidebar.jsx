import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="bg-white fixed w-20 h-screen p-4 border-r-[1px] border-r-white flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 text-black cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customer">
            <div className="bg-gray-100 hover:bg-gray-200 text-black cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 text-black cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 text-black cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full ml-20">{children}</div>
    </div>
  );
};

export default Sidebar;
