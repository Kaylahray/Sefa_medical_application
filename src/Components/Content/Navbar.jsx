import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import profile from "../../assets/profile.svg";
import down from "../../assets/arrow_down.svg";
import up from "../../assets/up.svg";
import { navigation } from "../../routes";

const Navbar = () => {
  const [open, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Determine the active parent link based on the current location
  const getActiveParent = () => {
    const parentLink = navigation.find((item) => {
      const isExactMatch = location.pathname === item.path;
      const isNestedMatch = location.pathname.startsWith(item.path + "/");

      return isExactMatch || isNestedMatch;
    });
    console.log(parentLink.name);

    return parentLink ? parentLink.name : "";
  };

  const activeParent = getActiveParent();

  return (
    <>
      <nav className="bg-white z-20 relative font-AvenirMedium">
        <div className="flex justify-around items-center h-full w-full p-1 lg:p-0">
          <div className="flex justify-between w-full z-30 px-4 lg:w-auto">
            <img src={profile} alt="Profile" />
            <div
              className="text-3xl lg:hidden p-2"
              onClick={() => setMenuOpen(!open)}
            >
              {!open ? (
                <div className="flex flex-col justify-between gap-1 h-8 w-10 mx-auto p-1 bg-transparent">
                  <span className="h-1 bg-green-200 w-[80%]"></span>
                  <span className="h-1 bg-red-600 w-[80%]"></span>
                  <span className="h-1 bg-black w-[80%]"></span>
                </div>
              ) : (
                <h1>X</h1>
              )}
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="lg:flex hidden items-center gap-8">
            {navigation.map((item, index) => (
              <li
                className="relative"
                key={item.name}
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                <div className="flex items-center">
                  {/* If the item has subLinks, disable the link functionality */}
                  {!item.subLinks ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive || activeParent === item.name
                          ? "inline-flex items-center font-AvenirMedium border-b-4 border-[#283231] px-2 py-5 text-sm font-bold text-gray-900"
                          : "inline-flex items-center font-AvenirMedium px-2 py-5 text-sm font-medium text-gray-900"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <button
                      className={
                        activeParent === item.name
                          ? "inline-flex items-center font-AvenirMedium border-b-4 border-[#283231] px-2 py-5 text-sm font-bold text-gray-900"
                          : "inline-flex items-center font-AvenirMedium px-2 py-5 text-sm font-medium text-gray-900"
                      }
                    >
                      {item.name}
                      <img
                        src={openDropdown === index ? up : down}
                        alt="Dropdown Arrow"
                        className="ml-1"
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown for Sublinks */}
                {item.subLinks && openDropdown === index && (
                  <ul
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-20 left-0 p-2 z-30 flex items-start w-max flex-col justify-between gap-2 bg-white shadow-lg"
                  >
                    {item.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <NavLink
                          to={subLink.path}
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index
                            )
                          }
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 text-[#03A300]"
                              : "block px-4 py-2 hover:text-[#03A300]"
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <ul
            className={`lg:hidden bg-white z-20 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            {navigation.map((item, index) => (
              <li key={item.name}>
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    if (item.subLinks) {
                      setOpenDropdown(openDropdown === index ? null : index);
                    } else {
                      setMenuOpen(false); // Close menu when clicking non-sublink nav item
                    }
                  }}
                >
                  {/* If the item has subLinks, disable the link functionality */}
                  {!item.subLinks ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive || activeParent === item.name
                          ? "inline-flex items-center font-AvenirMedium text-indigo-500 px-2 py-5 text-sm font-medium "
                          : "inline-flex items-center font-AvenirMedium px-2 py-5 text-sm font-medium text-gray-900"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <button
                      className={
                        activeParent === item.name
                          ? "inline-flex items-center font-AvenirMedium  text-indigo-500 px-2 py-5 text-sm font-medium"
                          : "inline-flex items-center font-AvenirMedium px-2 py-5 text-sm font-medium text-gray-900"
                      }
                    >
                      {item.name}
                      <img
                        src={openDropdown === index ? up : down}
                        alt="Dropdown Arrow"
                        className="ml-6"
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown for Sublinks */}
                {item.subLinks && openDropdown === index && (
                  <ul className="pl-4">
                    {item.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <NavLink
                          to={subLink.path}
                          onClick={() => {
                            setMenuOpen(!open);
                            setOpenDropdown(null);
                          }}
                          className={({ isActive }) =>
                            isActive
                              ? "block px-4 py-2 bg-gray-100 text-indigo-500"
                              : "block px-4 py-2 hover:bg-gray-100"
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center lg:justify-between gap-1">
            <img src={profile} alt="User Profile" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold leading-6 text-gray-900">
                Super Admin
              </span>
              <img src={down} alt="Arrow Down" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
