import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-gray-500 text-white flex flex-col p-4">
      <div className="flex flex-col space-y-2 uppercase">
        <Link
          href="/admin"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/admin/reservation_request"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          reservation requests
        </Link>
        <Link
          href="/admin/main_menu"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Main Menu
        </Link>
        <Link
          href="/admin/midtime_menu"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Midtime Menu
        </Link>
        <Link
          href="/admin/suggested_appetizers"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Suggested Appetizers
        </Link>
        <Link
          href="/admin/users"
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Users
        </Link>
        <Link
          href={{
            pathname: "/admin/users",
            query: { topUsers: "true" },
          }}
          className="hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          Top Users
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
