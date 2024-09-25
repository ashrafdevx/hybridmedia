import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState("Dashboard");

  // Array of navigation links
  const navLinks = [
    {
      name: "Dashboard",
      icon: "/Auth/home.svg",
      activeIcon: "/Auth/home-active.svg",
      path: "/",
    },
    {
      name: "Products",
      icon: "/Auth/products.svg",
      activeIcon: "/Auth/products-active.svg",
      path: "/",
    },
    {
      name: "Notifications",
      icon: "/Auth/Notification.svg",
      activeIcon: "/Auth/Notification-active.svg",
      path: "/",
    },
    {
      name: "Analytics",
      icon: "/Auth/analytics.svg",
      activeIcon: "/Auth/analytics-active.svg",
      path: "/",
    },
    {
      name: "Inventory",
      icon: "/Auth/inventory.svg",
      activeIcon: "/Auth/inventory-active.svg",
      path: "/",
    },
  ];

  // Function to handle link click and set active link
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="w-64 bg-white h-screen hidden sm:flex flex-col p-4">
      <div className="flex items-center mb-8">
        <img
          src="/Auth/avatar.svg"
          alt="user-profile"
          className="rounded-md mr-4"
        />
        <div>
          <h4 className="font-semibold">Mark Wood</h4>
          <p className="text-sm text-gray-500">mark@demo.com</p>
        </div>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        {navLinks.map((link) => (
          <Link
            to={link.path}
            key={link.name}
            onClick={() => handleLinkClick(link.name)}
            className={`${
              activeLink === link.name
                ? "bg-[#89089F] text-white"
                : "text-black"
            } w-[218px] flex items-start gap-2 h-[56px] py-4 px-3 rounded`}
          >
            <img
              src={activeLink === link.name ? link.icon : link.icon}
              className="w-6 h-6"
              alt={link.name}
            />
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <Link
          to="#"
          className="text-black w-[218px] flex items-start gap-2 h-[56px]  py-4 px-3 rounded"
        >
          <img src="/Auth/logout.svg" className="w-6 h-6" alt="Home" /> Logout
        </Link>
      </div>
    </div>
  );
};
