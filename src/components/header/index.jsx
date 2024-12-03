import { IoBookmarks } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const list = useSelector((state) => state.list);
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-2 items-center hover:text-gray-300 transition"
      >
        <div className="relative">
          <IoBookmarks className="text-xl" />
          <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-5 rounded-full grid place-items-center text-sm font-semibold">
            {list.length}
          </span>
        </div>
        Watch List
      </Link>
    </header>
  );
};

export default Header;
