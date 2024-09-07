import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import profile from "../../assets/profile.svg";
import down from "../../assets/arrow_down.svg";

const navigation = [
  { name: "Overview", path: "/" },
  { name: "Patient", path: "/patient" },
  { name: "Staff", path: "/staff" },
  { name: "Finance", path: "/finance" },
  { name: "Pharmacy", path: "/pharmacy" },
  { name: "Analytics", path: "/analytics" },
  { name: "Labs", path: "/labs" },
  { name: "Users", path: "/users" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <h1 className="-m-1.5 p-1.5 text-2xl">Sefa</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon for mobile menu button */}
          </button>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center font-AvenirMeduim border-b-2 border-indigo-500 px-2 pt-2 pb-4 text-sm font-medium text-gray-900"
                  : "inline-flex items-center font-AvenirMeduim px-2 pt-2 pb-4 text-sm font-medium text-gray-900"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 items-center lg:justify-end">
          <img src={profile} alt="User Profile" />
          <div className="flex items-center">
            <span className="text-sm font-semibold leading-6 text-gray-900">
              Super Admin
            </span>
            <img src={down} alt="Arrow Down" />
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-50"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                {/* Icon for closing mobile menu */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 border-b-2 border-indigo-500"
                          : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
