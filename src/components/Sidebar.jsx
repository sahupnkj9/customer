import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import {
  FiClock,
  FiShoppingCart,
  FiClipboard,
  FiGift,
  FiDollarSign,
  FiShare2,
  FiTarget,
  FiHelpCircle,
  FiGlobe,
  FiTag,
  FiBell,
  FiUsers,
  FiAlertTriangle,
  FiLock,
  FiGrid,
  FiMessageSquare,
  FiMail,
  FiBookmark,
  FiImage,
  FiFolder,
  FiCalendar,
} from "react-icons/fi";
import { LuArrowLeftToLine, LuArrowRightFromLine } from "react-icons/lu";
import { FaUsers, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("E commerce");

  const menuItems = [
    { label: "E commerce", path: "/" },
    { label: "Project management" },
    { label: "CRM" },
    { label: "Travel agency" },
    { label: "Stock", badge: "NEW" },
    { label: "Social feed" },
  ];

  const sections = [
    {
      title: "APPS",
      items: [
        { label: "Employee", icon: <FaUsers />, path: "/employee" },
        { label: "E commerce", icon: <FiShoppingCart /> },
        { label: "User Profile", icon: <FaRegUserCircle />, path: "/profile" },
        { label: "CRM", icon: <FiClock /> },
        { label: "Project management", icon: <FiClipboard /> },
        { label: "Travel agency", icon: <FiGift /> },
        { label: "Stock", icon: <FiDollarSign />, badge: "NEW" },
        { label: "Chat", icon: <FiMessageSquare /> },
        { label: "Email", icon: <FiMail /> },
        { label: "Events", icon: <FiBookmark /> },
        { label: "Kanban", icon: <FiGrid /> },
        { label: "Reports", icon: <FiTag /> },
        { label: "Social feed", icon: <FiShare2 /> },
        { label: "Gallery", icon: <FiImage /> },
        { label: "Files", icon: <FiFolder /> },
        { label: "Calendar", icon: <FiCalendar /> },
      ],
    },
    {
      title: "PAGES",
      items: [
        { label: "Starter", icon: <FiTarget /> },
        { label: "Faq", icon: <FiHelpCircle /> },
        { label: "Landing", icon: <FiGlobe /> },
        { label: "Pricing", icon: <FiTag /> },
        { label: "Notifications", icon: <FiBell /> },
        { label: "Members", icon: <FiUsers /> },
        { label: "Timeline", icon: <FiClock /> },
        { label: "Errors", icon: <FiAlertTriangle /> },
        { label: "Authentication", icon: <FiLock /> },
      ],
    },
  ];

  return (
    <div
      className={`fixed dark:bg-[#101828] top-[64px] left-0 h-[calc(100vh-64px)] flex flex-col bg-white border-r border-gray-200 transition-all duration-300  ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Scrollable nav */}
      <div className="flex-1 overflow-y-auto p-2 space-y-6">
        {/* Collapsible Home Menu */}
        <div>
          <div
            className={`flex items-center p-2 rounded-lg cursor-pointer text-[#525b75] hover:bg-gray-100 ${
              isOpen ? "bg-gray-100" : "text-[#3874FF]"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!collapsed && (
              <IoMdArrowDropright
                className={`transition-transform duration-200 mr-2 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            )}
            <FiClock className="text-lg mr-2" />
            {!collapsed && (
              <span className="font-medium font-outfit">Home</span>
            )}
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {!collapsed && (
              <ul className="ml-8 mt-2 space-y-1 text-sm">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={`flex items-center px-2 py-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-[#525b75] font-outfit font-medium ${
                      activeItem === item.label ? "text-[#3874FF]" : ""
                    }`}
                    onClick={() => setActiveItem(item.label)}
                  >
                    {item.path ? (
                      <Link to={item.path} className="flex items-center w-full">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-500 rounded font-outfit">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ) : (
                      <>
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-500 rounded font-outfit">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <h4 className="font-medium font-outfit text-xs text-gray-500 pl-4 mb-2">
                {section.title}
              </h4>
            )}
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center px-2 py-2 rounded-lg cursor-pointer transition-colors duration-200 text-[#344054] hover:bg-gray-100 font-medium"
                  onClick={() => setActiveItem(item.label)}
                >
                  {item.path ? (
                    <Link to={item.path} className="flex items-center w-full">
                      <span className="text-lg mr-3">{item.icon}</span>
                      {!collapsed && (
                        <span className="flex-1">{item.label}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-500 rounded font-outfit">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <>
                      <span className="text-lg mr-3">{item.icon}</span>
                      {!collapsed && (
                        <span className="flex-1">{item.label}</span>
                      )}
                      {!collapsed && item.badge && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-orange-100 text-orange-500 rounded font-outfit">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Toggle Collapse Button (Sticky Bottom) */}
      <div className="px-2 py-4 border-t bg-white dark:bg-[#101828]">
        <button
          className="w-full flex items-center gap-2 font-outfit text-[#344054] font-medium"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <LuArrowRightFromLine className=" ml-3 text-xl " />
          ) : (
            <>
              <LuArrowLeftToLine className="text-xl" />
              <span>Collapsed View</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
